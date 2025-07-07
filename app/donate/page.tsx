import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, DollarSign, Users, Calendar, Heart } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { PaymentMethodsDisplay } from "@/components/payment-methods-display"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=1920"
              alt="Donate to our cause"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Make a Difference Today</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Your donation helps us create sustainable change in communities around the world.
            </p>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-ubuntu-dark-brown">
                  Your Support Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every donation, no matter the size, makes a significant impact on our ability to serve communities in
                  need. Your generosity helps us provide education, healthcare, clean water, and economic opportunities
                  to those who need it most.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Ubuntu Charity Foundation is a registered 501(c)(3) nonprofit organization. All donations are
                  tax-deductible to the extent allowed by law.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="bg-ubuntu-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-ubuntu-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">50,000+</h3>
                    <p className="text-muted-foreground">Lives impacted through your generous donations</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="bg-ubuntu-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-ubuntu-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">85%</h3>
                    <p className="text-muted-foreground">Of donations go directly to our programs</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ubuntu-dark-brown">Where Your Money Goes</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Programs & Services</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-ubuntu-red h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Administration</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-ubuntu-red h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fundraising</span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-ubuntu-red h-2.5 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-ubuntu-dark-brown">Accepted Payment Methods</h3>
                  <PaymentMethodsDisplay showLabels size="medium" />
                </div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-ubuntu-dark-brown">Donate Now</h2>
                <Tabs defaultValue="one-time" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="one-time">One-time</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-time" className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3 text-ubuntu-dark-brown">Select Amount</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $25
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $50
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $100
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $250
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $500
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $1000
                        </Button>
                      </div>
                      <div className="mt-3">
                        <Input type="text" placeholder="Other Amount" className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium text-ubuntu-dark-brown">Personal Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                      </div>
                      <Input type="email" placeholder="Email Address" />
                      <Input type="tel" placeholder="Phone Number (Optional)" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium text-ubuntu-dark-brown">Payment Information</h3>
                      <div className="border rounded-md p-4 bg-background">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span className="font-medium">Credit Card</span>
                          </div>
                          <PaymentMethodsDisplay size="small" />
                        </div>
                        <div className="space-y-3">
                          <Input placeholder="Card Number" />
                          <div className="grid grid-cols-2 gap-3">
                            <Input placeholder="MM/YY" />
                            <Input placeholder="CVC" />
                          </div>
                          <Input placeholder="Billing Zip Code" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-start mb-4">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span className="text-sm text-muted-foreground">
                          I'd like to cover the transaction fees so 100% of my donation goes to Ubuntu Charity
                          Foundation.
                        </span>
                      </label>
                      <Button className="w-full h-12 text-lg bg-ubuntu-red hover:bg-ubuntu-red/90 text-white">
                        Donate Now
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="monthly" className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3 text-ubuntu-dark-brown">Select Monthly Amount</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $10
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $25
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $50
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $100
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $200
                        </Button>
                        <Button
                          variant="outline"
                          className="h-12 border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                        >
                          $500
                        </Button>
                      </div>
                      <div className="mt-3">
                        <Input type="text" placeholder="Other Amount" className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium text-ubuntu-dark-brown">Personal Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                      </div>
                      <Input type="email" placeholder="Email Address" />
                      <Input type="tel" placeholder="Phone Number (Optional)" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-medium text-ubuntu-dark-brown">Payment Information</h3>
                      <div className="border rounded-md p-4 bg-background">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span className="font-medium">Credit Card</span>
                          </div>
                          <PaymentMethodsDisplay size="small" />
                        </div>
                        <div className="space-y-3">
                          <Input placeholder="Card Number" />
                          <div className="grid grid-cols-2 gap-3">
                            <Input placeholder="MM/YY" />
                            <Input placeholder="CVC" />
                          </div>
                          <Input placeholder="Billing Zip Code" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-start mb-4">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <span className="text-sm text-muted-foreground">
                          I'd like to cover the transaction fees so 100% of my donation goes to Ubuntu Charity
                          Foundation.
                        </span>
                      </label>
                      <Button className="w-full h-12 text-lg bg-ubuntu-red hover:bg-ubuntu-red/90 text-white">
                        Donate Monthly
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Your donation is secure and encrypted. You can cancel your monthly donation at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-ubuntu-dark-brown">
                Other Ways to Give
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                There are many ways to support our mission beyond one-time or monthly donations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-6">
                  <div className="bg-ubuntu-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-ubuntu-red"
                    >
                      <path d="M12 6c-2.67 0-5.33.27-8 .82V18c2.67-.55 5.33-.82 8-.82s5.33.27 8 .82V6.82C17.33 6.27 14.67 6 12 6Z"></path>
                      <path d="M12 6V2"></path>
                      <path d="M12 22v-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Legacy Giving</h3>
                  <p className="text-muted-foreground mb-4">
                    Leave a lasting impact by including Ubuntu Charity Foundation in your will or estate plans. Your
                    legacy gift ensures our work continues for generations to come.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-6">
                  <div className="bg-ubuntu-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-ubuntu-red"
                    >
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                      <path d="M16.5 9.4 7.55 4.24"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" x2="12" y1="22" y2="12"></line>
                      <circle cx="18.5" cy="15.5" r="2.5"></circle>
                      <path d="M20.27 17.27 22 19"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Corporate Partnerships</h3>
                  <p className="text-muted-foreground mb-4">
                    Partner with us through corporate giving, matching gift programs, cause marketing, or employee
                    volunteer initiatives. Together, we can make a bigger impact.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                  >
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-6">
                  <div className="bg-ubuntu-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-ubuntu-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Fundraise For Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your own fundraising campaign for birthdays, weddings, or special events. Rally your friends
                    and family to support our cause.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                  >
                    Start Fundraising
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Your Impact in Action</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See how your donations are changing lives and communities around the world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/30 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="School building project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">New School in Rural Tanzania</h3>
                  <p className="text-muted-foreground mb-4">
                    Thanks to generous donors like you, we built a new school in Mwanza, Tanzania that now serves over
                    300 children who previously had to walk 10+ miles to attend classes.
                  </p>
                  <Button variant="outline">Read Full Story</Button>
                </div>
              </div>
              <div className="bg-muted/30 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Clean water project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Clean Water for Kenyan Village</h3>
                  <p className="text-muted-foreground mb-4">
                    Your donations helped us install a water purification system in Kibera, Kenya, providing clean
                    drinking water to over 5,000 people and reducing waterborne illnesses by 80%.
                  </p>
                  <Button variant="outline">Read Full Story</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about donating to Ubuntu Charity Foundation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-muted-foreground">
                    Yes, Ubuntu Charity Foundation is a registered 501(c)(3) nonprofit organization. All donations are
                    tax-deductible to the extent allowed by law.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">How is my donation used?</h3>
                  <p className="text-muted-foreground">
                    Approximately 85% of all donations go directly to our programs, with the remaining 15% used for
                    administrative costs and fundraising efforts.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Can I specify where my donation goes?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can designate your donation to a specific program or initiative. Simply note your
                    preference in the comments section when making your donation.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">How do I get a receipt for my donation?</h3>
                  <p className="text-muted-foreground">
                    You will automatically receive a receipt via email after making an online donation. For other
                    donation methods, please contact our donor services team.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Can I make a donation in someone's honor?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can make a tribute gift in honor or memory of someone special. We can send a notification
                    card to the honoree or their family if you provide their contact information.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">How do I update or cancel my monthly donation?</h3>
                  <p className="text-muted-foreground">
                    You can update or cancel your monthly donation at any time by logging into your donor account or
                    contacting our donor services team at donations@ubuntucharity.org.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our Community of Givers</h2>
                  <p className="text-primary-foreground/90 mb-8 text-lg">
                    Together, we can create lasting change. Your donation today helps build a better tomorrow for
                    communities around the world.
                  </p>
                  <Button size="lg" variant="secondary" className="rounded-full">
                    Donate Now
                  </Button>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Community of donors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Ubuntu Charity</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering communities through sustainable development and the spirit of Ubuntu.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-muted-foreground hover:text-primary">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-muted-foreground hover:text-primary">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="text-muted-foreground hover:text-primary">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-muted-foreground">123 Charity Way, Nairobi, Kenya</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-muted-foreground">+254 123 456 789</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-muted-foreground">info@ubuntucharity.org</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-muted-foreground hover:text-primary">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Ubuntu Charity Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
