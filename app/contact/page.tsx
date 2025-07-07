import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=1920"
              alt="Contact us"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              We'd love to hear from you. Reach out with questions, feedback, or to get involved.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have a question about our programs, want to volunteer, or are interested in partnering
                  with us, we're here to help.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Charity Way
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@ubuntucharity.org
                        <br />
                        donations@ubuntucharity.org
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        +254 123 456 789
                        <br />
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                    >
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
                    <Link
                      href="#"
                      className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                    >
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
                    <Link
                      href="#"
                      className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                    >
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
                    <Link
                      href="#"
                      className="bg-muted w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                    >
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
              </div>
              <div className="bg-muted/30 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Locations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We have offices and program sites in multiple countries across Africa and around the world.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Map of our locations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our organization and how you can get involved.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">How can I donate to Ubuntu Charity?</h3>
                  <p className="text-muted-foreground">
                    You can donate online through our secure payment system, by mail, or by phone. We accept one-time
                    and recurring donations. Visit our Donate page for more information.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-muted-foreground">
                    Yes, Ubuntu Charity Foundation is a registered 501(c)(3) nonprofit organization. All donations are
                    tax-deductible to the extent allowed by law.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">How can I volunteer with Ubuntu Charity?</h3>
                  <p className="text-muted-foreground">
                    We offer various volunteer opportunities both locally and internationally. Fill out our volunteer
                    application form on the Volunteer page to get started.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">How is my donation used?</h3>
                  <p className="text-muted-foreground">
                    We are committed to transparency. Approximately 85% of all donations go directly to our programs,
                    with the remaining 15% used for administrative costs and fundraising efforts.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Can I sponsor a specific project or child?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer sponsorship programs for both specific projects and children. Contact our team for
                    more information on how to become a sponsor.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">How can my company partner with Ubuntu Charity?</h3>
                  <p className="text-muted-foreground">
                    We offer corporate partnership opportunities including sponsorships, matching gift programs, and
                    employee volunteer initiatives. Contact our partnerships team to discuss options.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see your question here? Contact us directly and we'll be happy to help.
              </p>
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to receive updates on our work, upcoming events, and ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="sm:w-auto">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
