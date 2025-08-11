"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { initiateSTKPush } from "@/app/actions/mpesa-actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import Image from "next/image"

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    })
    .max(12, {
      message: "Phone number must not exceed 12 digits.",
    })
    .refine((value) => /^(0|254|\+254)?\d{9}$/.test(value.replace(/\s+/g, "")), {
      message: "Please enter a valid Kenyan phone number.",
    }),
  amount: z
    .string()
    .min(1, {
      message: "Please enter an amount.",
    })
    .refine((value) => !isNaN(Number(value)), {
      message: "Amount must be a number.",
    })
    .refine((value) => Number(value) >= 10, {
      message: "Minimum donation amount is KES 10.",
    }),
})

export function MpesaDonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState<{
    success: boolean
    message: string
    checkoutRequestId?: string
  } | null>(null)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      amount: "",
    },
  })

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setResponse(null)

    try {
      // Create FormData object
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("phoneNumber", values.phoneNumber)
      formData.append("amount", values.amount)

      // Call server action
      const result = await initiateSTKPush(formData)
      setResponse(result)
    } catch (error) {
      console.error("Error submitting form:", error)
      setResponse({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="flex flex-col h-auto w-200 items-center">
      {response && (
        <Alert variant={response.success ? "default" : "destructive"} className="mb-6 color bg-green-200 delay-5">
          {response.success ? <CheckCircle2 className="h-4 w-4 " /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{response.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{response.message}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-muted/30 p-2 rounded-xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="xyz@example.com" type="email" {...field} />
                </FormControl>
                <FormDescription>We'll send your donation receipt to this email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>M-Pesa Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0712345678" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the phone number registered with M-Pesa (e.g., 0712345678 or 254712345678).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Donation Amount (KES)</FormLabel>
                <FormControl>
                  <Input placeholder="1000" type="number" min="10" {...field} />
                </FormControl>
                <FormDescription>Minimum donation amount is KES 10.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-green-500" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Donate via M-Pesa"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
