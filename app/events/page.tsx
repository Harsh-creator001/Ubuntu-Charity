import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Calendar, MapPin, Clock, Users, Heart } from "lucide-react"
import EventsSection from "@/components/events"
import events from "@/components/events"


export default function EventsPage() {
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
              alt="Upcoming Events"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Upcoming Events</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Join us at our upcoming events and be part of the change we're creating together.
            </p>
          </div>
        </section>

        <EventsSection />

        {/* Host Your Own Event Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Host Your Own Event</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Want to make a difference in your community? Consider hosting your own fundraising event to support
                  Ubuntu Charity Foundation. We'll provide you with all the resources and support you need to make your
                  event a success.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  From bake sales to benefit concerts, every event helps us further our mission of empowering
                  communities and creating sustainable change.
                </p>
                <Button size="lg">Get Started</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Host your own event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Event Calendar</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Plan ahead and mark your calendar for these important dates. We hope to see you at our upcoming events!
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="flex items-start p-4 bg-background rounded-lg">
                    <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline">Download Full Calendar</Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to receive updates on upcoming events and ways to get involved.
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
