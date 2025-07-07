import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const callbackData = await request.json()

    // Log the callback data
    console.log("M-Pesa Callback Data:", callbackData)

    // Process the callback data
    // This is where you would update your database with the transaction status
    // The structure of callbackData depends on the M-Pesa API version you're using

    // Example structure for STK callback:
    // {
    //   Body: {
    //     stkCallback: {
    //       MerchantRequestID: "...",
    //       CheckoutRequestID: "...",
    //       ResultCode: 0, // 0 means success
    //       ResultDesc: "The service request is processed successfully.",
    //       CallbackMetadata: {
    //         Item: [
    //           { Name: "Amount", Value: 1000 },
    //           { Name: "MpesaReceiptNumber", Value: "..." },
    //           { Name: "TransactionDate", Value: 20230101101010 },
    //           { Name: "PhoneNumber", Value: 254712345678 }
    //         ]
    //       }
    //     }
    //   }
    // }

    // Check if the transaction was successful
    const resultCode = callbackData?.Body?.stkCallback?.ResultCode

    if (resultCode === 0) {
      // Transaction successful
      // Extract transaction details
      const metadata = callbackData?.Body?.stkCallback?.CallbackMetadata?.Item

      if (metadata) {
        const amount = metadata.find((item: any) => item.Name === "Amount")?.Value
        const receiptNumber = metadata.find((item: any) => item.Name === "MpesaReceiptNumber")?.Value
        const transactionDate = metadata.find((item: any) => item.Name === "TransactionDate")?.Value
        const phoneNumber = metadata.find((item: any) => item.Name === "PhoneNumber")?.Value

        // Here you would store the transaction in your database
        // For example:
        // await db.transaction.create({
        //   data: {
        //     amount,
        //     receiptNumber,
        //     transactionDate: String(transactionDate),
        //     phoneNumber: String(phoneNumber),
        //     status: 'completed'
        //   }
        // })

        console.log("Transaction successful:", { amount, receiptNumber, transactionDate, phoneNumber })
      }
    } else {
      // Transaction failed
      console.log("Transaction failed:", callbackData?.Body?.stkCallback?.ResultDesc)

      // Here you would update the transaction status in your database
      // For example:
      // await db.transaction.update({
      //   where: { checkoutRequestId: callbackData?.Body?.stkCallback?.CheckoutRequestID },
      //   data: { status: 'failed', resultDesc: callbackData?.Body?.stkCallback?.ResultDesc }
      // })
    }

    // Always respond with success to the M-Pesa API
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing M-Pesa callback:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
