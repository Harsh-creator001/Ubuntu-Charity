import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Calendar, MapPin, Clock, Users, Heart } from "lucide-react"

// This would be replaced with actual events data from your CMS or database
const events = [
  {
    id: 1,
    title: "Ubuntu Meet-UP Gala",
    date: "August 16th, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Viewpoint Resort, Mbui Nzau Road",
    image: "/images/Ubuntu-meetup.jpg?height=200&width=400",
    description:
      "🔥 YO UBUNTU FAMILY 🔥It’s going down on AUGUST 16TH , and you better be there! We’re pulling up at Viewpoint Resort, Mbui Nzau for a day full of vibes, vision reflection, and pure energy💥",
    attendees: "All Ubuntu Family Members and partners are welcome to join us for this epic event! 🎉",
  },
  {
    id: 2,
    title: "Community Volunteer Day",
    date: "Jul 8, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Central Park, Chicago",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Roll up your sleeves and make a difference! Join us for a day of community service projects that will help local families in need.",
    attendees: 100,
  },
  {
    id: 3,
    title: "Ubuntu Charity 5K Run",
    date: "Aug 20, 2023",
    time: "8:00 AM - 12:00 PM",
    location: "Riverside Park, San Francisco",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Run for a cause! Participate in our annual 5K to raise awareness and funds for clean water projects in rural communities.",
    attendees: 500,
  },
  {
    id: 4,
    title: "Educational Workshop Series",
    date: "Sep 5, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Boston",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Learn about sustainable development and how you can make a difference in your community through our educational workshop series.",
    attendees: 75,
  },
  {
    id: 5,
    title: "Charity Concert",
    date: "Oct 12, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "City Auditorium, Los Angeles",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Enjoy a night of music and entertainment while supporting our cause. All proceeds go directly to our education programs.",
    attendees: 1000,
  },
  {
    id: 6,
    title: "Holiday Donation Drive",
    date: "Dec 1-15, 2023",
    time: "All Day",
    location: "Multiple Locations",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Help us bring joy to families in need during the holiday season by donating toys, clothes, and food items at our collection points.",
    attendees: 0,
  },
]

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

        {/* Events Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      {Number(event.attendees) > 0 && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6 flex-1">{event.description}</p>
                    <Button variant="outline" className="w-full mt-auto">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
        <section className="py-16 md:py-24">
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
        </section>

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
