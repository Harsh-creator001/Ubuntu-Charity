"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Copy, Eye, EyeOff, Lock } from "lucide-react"
import { MainNav } from "@/components/main-nav"

// Form schema
const mpesaCredentialsSchema = z.object({
  MPESA_CONSUMER_KEY: z.string().min(1, "Consumer Key is required"),
  MPESA_CONSUMER_SECRET: z.string().min(1, "Consumer Secret is required"),
  MPESA_SHORTCODE: z.string().min(1, "Shortcode is required"),
  MPESA_PASSKEY: z.string().min(1, "Passkey is required"),
  NEXT_PUBLIC_APP_URL: z.string().url("Please enter a valid URL"),
})

type MpesaCredentials = z.infer<typeof mpesaCredentialsSchema>

export default function MpesaSetupPage() {
  const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({})
  const [copied, setCopied] = useState<string | null>(null)
  const [setupComplete, setSetupComplete] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MpesaCredentials>({
    resolver: zodResolver(mpesaCredentialsSchema),
    defaultValues: {
      MPESA_CONSUMER_KEY: "",
      MPESA_CONSUMER_SECRET: "",
      MPESA_SHORTCODE: "",
      MPESA_PASSKEY: "",
      NEXT_PUBLIC_APP_URL: typeof window !== "undefined" ? window.location.origin : "",
    },
  })

  const toggleShowSecret = (field: string) => {
    setShowSecrets((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  const [submittedData, setSubmittedData] = useState<MpesaCredentials | null>(null)

  const onSubmit = (data: MpesaCredentials) => {
    console.log("M-Pesa credentials:", data)
    setSubmittedData(data) 
    setSetupComplete(true)    
  }

  const formatEnvVars = (data: MpesaCredentials) => {
    return Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n")
  }


  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">M-Pesa Integration Setup</h1>
          <p className="text-muted-foreground mb-8">
            Enter your M-Pesa API credentials below. These will be saved as environment variables in your v0
            environment.
          </p>

          {setupComplete && submittedData &&(
            <div className="space-y-6">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Setup Complete</AlertTitle>
                <AlertDescription className="text-green-700">
                  Your M-Pesa credentials have been prepared. Follow the instructions below to add them to your v0
                  environment.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Add Environment Variables to v0</CardTitle>
                  <CardDescription>
                    Copy the following environment variables and add them to your v0 environment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">{formatEnvVars(submittedData)}</pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(formatEnvVars(submittedData!), "env")}
                    >
                      {copied === "env" ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    After adding these variables to your v0 environment, your M-Pesa integration will be ready to use.
                  </p>
                </CardFooter>
              </Card>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Next Steps</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Copy the environment variables above</li>
                  <li>
                    Add them to your v0 environment using the{" "}
                    <code className="bg-muted px-1 py-0.5 rounded">AddEnvironmentVariables</code> component
                  </li>
                  <li>Restart your application for the changes to take effect</li>
                  <li>
                    Test your M-Pesa integration by making a donation at{" "}
                    <a href="/donate/mpesa" className="text-primary hover:underline">
                      /donate/mpesa
                    </a>
                  </li>
                </ol>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setSetupComplete(false)}>Back to Form</Button>
              </div>
            </div>
          )} : (
            <Card>
              <CardHeader>
                <CardTitle>M-Pesa API Credentials</CardTitle>
                <CardDescription>Enter the credentials from your Safaricom Daraja developer account.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="MPESA_CONSUMER_KEY">Consumer Key</Label>
                      <div className="relative">
                        <Input
                          id="MPESA_CONSUMER_KEY"
                          type={showSecrets.MPESA_CONSUMER_KEY ? "text" : "password"}
                          {...register("MPESA_CONSUMER_KEY")}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => toggleShowSecret("MPESA_CONSUMER_KEY")}
                        >
                          {showSecrets.MPESA_CONSUMER_KEY ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      {errors.MPESA_CONSUMER_KEY && (
                        <p className="text-sm text-red-500 mt-1">{errors.MPESA_CONSUMER_KEY.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        The Consumer Key from your Safaricom Daraja account.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="MPESA_CONSUMER_SECRET">Consumer Secret</Label>
                      <div className="relative">
                        <Input
                          id="MPESA_CONSUMER_SECRET"
                          type={showSecrets.MPESA_CONSUMER_SECRET ? "text" : "password"}
                          {...register("MPESA_CONSUMER_SECRET")}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => toggleShowSecret("MPESA_CONSUMER_SECRET")}
                        >
                          {showSecrets.MPESA_CONSUMER_SECRET ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      {errors.MPESA_CONSUMER_SECRET && (
                        <p className="text-sm text-red-500 mt-1">{errors.MPESA_CONSUMER_SECRET.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        The Consumer Secret from your Safaricom Daraja account.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="MPESA_SHORTCODE">Shortcode (Paybill/Till Number)</Label>
                      <Input id="MPESA_SHORTCODE" {...register("MPESA_SHORTCODE")} />
                      {errors.MPESA_SHORTCODE && (
                        <p className="text-sm text-red-500 mt-1">{errors.MPESA_SHORTCODE.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        Your M-Pesa business shortcode (for sandbox, use 174379).
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="MPESA_PASSKEY">Passkey</Label>
                      <div className="relative">
                        <Input
                          id="MPESA_PASSKEY"
                          type={showSecrets.MPESA_PASSKEY ? "text" : "password"}
                          {...register("MPESA_PASSKEY")}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => toggleShowSecret("MPESA_PASSKEY")}
                        >
                          {showSecrets.MPESA_PASSKEY ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.MPESA_PASSKEY && (
                        <p className="text-sm text-red-500 mt-1">{errors.MPESA_PASSKEY.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        The passkey provided by Safaricom for Lipa Na M-Pesa Online.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="NEXT_PUBLIC_APP_URL">Application URL</Label>
                      <Input id="NEXT_PUBLIC_APP_URL" {...register("NEXT_PUBLIC_APP_URL")} />
                      {errors.NEXT_PUBLIC_APP_URL && (
                        <p className="text-sm text-red-500 mt-1">{errors.NEXT_PUBLIC_APP_URL.message}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        The full URL of your application (e.g., https://your-domain.com).
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full">
                      Save Credentials
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex items-center text-amber-600 mb-2">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Security Note</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  These credentials are sensitive. They will be stored as environment variables in your v0 environment
                  and will not be exposed to clients.
                </p>
              </CardFooter>
            </Card>
          )
        </div>
      </main>
    </div>
  )
}
