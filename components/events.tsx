import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Heart } from "lucide-react"
import Link from "next/link"


// Events Json to be replaced by actual data from database

const events = [
  {
    id: 1,
    title: "Ubuntu Meet-UP Gala",
    date: "August 16th, 2025",
    time: "6:00 AM - 10:00 PM",
    location: "Viewpoint Resort, Mbui Nzau Road",
    image: "/images/Ubuntu-meetup.jpg?height=200&width=400",
    description:
      "🔥 YO UBUNTU FAMILY 🔥It’s going down on AUGUST 16TH , and you better be there! We’re pulling up at Viewpoint Resort, Mbui Nzau for a day full of vibes, vision reflection, and pure energy💥",
    attendees: 30,
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

// events card
export default function EventsSection(){
  return(
    <div>
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
                      <Link href="/register"> Register Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                
              ))}
            </div>
          </div>
        </section>
      </div> 

  )
}