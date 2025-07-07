"use server";

import { revalidatePath } from "next/cache";

export const initiateSTKPush = async (formData: FormData) => {
  try {
    const phone = formData.get("phoneNumber") as string;
    const amount = formData.get("amount") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    // Validate required environment variables
    const { MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET, MPESA_SHORTCODE, MPESA_PASSKEY, NEXT_PUBLIC_APP_URL } = process.env;

    // console.log(" CONSUMER KEY:", MPESA_CONSUMER_KEY);
    // console.log(" SHORTCODE:", MPESA_SHORTCODE);
    // console.log(" APP URL:", NEXT_PUBLIC_APP_URL);


    if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET || !MPESA_SHORTCODE || !MPESA_PASSKEY || !NEXT_PUBLIC_APP_URL) {
      console.error("M-Pesa environment variables are missing.");
      return { success: false, message: "M-Pesa environment variables are not configured." };
    }

    // Generate Safaricom-compliant timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, 14);

    // Generate base64-encoded password
    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString("base64");

    // Sanitize phone number
    const sanitizePhoneNumber = (phone: string): string => {
      let sanitized = phone.trim().replace(/\s+/g, "");

      if (sanitized.startsWith("+")) sanitized = sanitized.substring(1);
      if (sanitized.startsWith("0")) sanitized = "254" + sanitized.substring(1);
      else if ((sanitized.startsWith("7") || sanitized.startsWith("1")) && sanitized.length === 9) sanitized = "254" + sanitized;

      return sanitized;
    };

    const sanitizedPhone = sanitizePhoneNumber(phone);

    const transactionDesc = `Payment for ${name} - ${email}`;

    const callbackUrl = `${NEXT_PUBLIC_APP_URL}/callback`; 
    console.log("✅ Callback URL:", callbackUrl);

    const stkPushRequestBody = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Number(amount),
      PartyA: sanitizedPhone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: sanitizedPhone,
      CallBackURL: callbackUrl,
      AccountReference: "UbuntuCharityFoundation",
      TransactionDesc: transactionDesc,
    };

    // Fetch access token
    const encodedCredentials = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString("base64");

    const tokenResponse = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: { Authorization: `Basic ${encodedCredentials}` },
    });

    if (!tokenResponse.ok) throw new Error("Failed to retrieve access token");

    const { access_token } = await tokenResponse.json();

    // Initiate STK Push
    const stkPushResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stkPushRequestBody),
    });

    const stkPushData = await stkPushResponse.json();

    if (!stkPushResponse.ok) {
      console.error("STK Push failed:", stkPushData);
      return { success: false, message: stkPushData.errorMessage || stkPushData.ResponseDescription || "STK Push failed" };
    }

    if (stkPushData.ResponseCode === "0") {
      revalidatePath("/donate/mpesa");
      return {
        success: true,
        message: stkPushData.CustomerMessage,
        checkoutRequestId: stkPushData.CheckoutRequestID,
      };
    } else {
      return { success: false, message: stkPushData.ResponseDescription || "STK Push failed" };
    }
  } catch (error: any) {
    console.error("STK Push error:", error);
    return { success: false, message: error.message || "Failed to initiate M-Pesa STK push." };
  }
};

export const isMpesaConfigured = async () => {
  const missingVars: string[] = [];

  if (!process.env.MPESA_CONSUMER_KEY) missingVars.push("MPESA_CONSUMER_KEY");
  if (!process.env.MPESA_CONSUMER_SECRET) missingVars.push("MPESA_CONSUMER_SECRET");
  if (!process.env.MPESA_SHORTCODE) missingVars.push("MPESA_SHORTCODE");
  if (!process.env.MPESA_PASSKEY) missingVars.push("MPESA_PASSKEY");
  if (!process.env.NEXT_PUBLIC_APP_URL) missingVars.push("NEXT_PUBLIC_APP_URL");

  return { isConfigured: missingVars.length === 0, missingVars };
};
