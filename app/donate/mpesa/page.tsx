import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MpesaDonationForm } from "@/components/mpesa-donation-form"
import { PaymentMethodsDisplay } from "@/components/payment-methods-display"
import { Heart } from "lucide-react"

export default function MpesaDonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-[300px]">
            <Image
              src="/images/mpesa-logo.png?height=300&width=1920"
              alt="Donate via M-Pesa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Donate via M-Pesa</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Support our mission with a quick and secure mobile payment through M-Pesa.
            </p>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-ubuntu-dark-brown">
                  Support Our Cause
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your donation helps us create sustainable change in communities across Africa. With M-Pesa, donating
                  is now easier and more secure than ever.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Simply fill out the form, and you'll receive an STK push notification on your phone to complete the
                  donation.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-ubuntu-dark-brown">How It Works</h3>
                  <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                    <li>Enter your details and donation amount in the form</li>
                    <li>Click "Donate via M-Pesa" to initiate the payment</li>
                    <li>You'll receive an M-Pesa prompt on your phone</li>
                    <li>Enter your M-Pesa PIN to complete the donation</li>
                    <li>You'll receive a confirmation message once the transaction is complete</li>
                  </ol>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-ubuntu-dark-brown">Other Ways to Donate</h3>
                  <p className="text-muted-foreground mb-4">
                    If you prefer other payment methods, we offer several alternatives:
                  </p>
                  <div className="mb-6">
                    <PaymentMethodsDisplay showLabels size="medium" />
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                      asChild
                    >
                      <Link href="/donate">Credit/Debit Card Donation</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                      asChild
                    >
                      <Link href="/donate">Bank Transfer</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                      asChild
                    >
                      <Link href="/donate">PayPal Donation</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-ubuntu-dark-brown">M-Pesa Donation Form</h2>
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <Image
                      src="/images/mpesa-logo.png"
                      alt="M-Pesa logo"
                      width={60}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>
                <MpesaDonationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-ubuntu-dark-brown">Your Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how your donation makes a difference in the communities we serve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-ubuntu-dark-brown">KES 1,000</h3>
                <p className="text-muted-foreground">Provides school supplies for 5 children for a full term.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-ubuntu-dark-brown">KES 5,000</h3>
                <p className="text-muted-foreground">Funds a water purification system for a family for one year.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-ubuntu-dark-brown">KES 10,000</h3>
                <p className="text-muted-foreground">
                  Sponsors vocational training for one youth in our economic empowerment program.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
