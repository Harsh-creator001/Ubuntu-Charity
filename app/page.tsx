import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, ArrowRight, Calendar, MapPin } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { MissionVisionSlider } from "@/components/mission-vision-slider"
import { Logo } from "@/components/logo"
import { HerosSlider } from "@/components/heros-slider"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/images/partners.jpg"
              alt="Children smiling in a classroom"
              fill
              className="object-cover object-[center_40%]"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Humanity Towards All
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Join us in our mission to create sustainable change and empower communities across the globe.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 bg-ubuntu-red hover:bg-ubuntu-red/90 text-white"
                asChild
              >
                <Link href="/donate/mpesa">Donate Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-ubuntu-dark-brown"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section> */}

        {/* heros slider  */}
        <HerosSlider/>

        {/* Mission, Vision, and Core Values Slider */}
        <MissionVisionSlider />

        {/* Impact Stats */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16 text-ubuntu-dark-brown">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-ubuntu-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-ubuntu-red" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-ubuntu-dark-brown">50K+</h3>
                <p className="text-muted-foreground">Children Impacted</p>
              </div>
              <div className="text-center">
                <div className="bg-ubuntu-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-ubuntu-red" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-ubuntu-dark-brown">2</h3>
                <p className="text-muted-foreground">Counties Served</p>
              </div>
              <div className="text-center">
                <div className="bg-ubuntu-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="h-8 w-8 text-ubuntu-red"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-ubuntu-dark-brown">7</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="bg-ubuntu-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-ubuntu-red" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-ubuntu-dark-brown">2</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-ubuntu-dark-brown">
                Our Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We focus on sustainable development through education, healthcare, economic empowerment, and
                environmental conservation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-ubuntu-light-brown/20">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Education program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Education For All</h3>
                  <p className="text-muted-foreground mb-4">
                    Providing access to quality education for children in underserved communities through school
                    building, teacher training, and scholarship programs.
                  </p>
                  <Link
                    href="/programs/education"
                    className="text-ubuntu-red font-medium inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-ubuntu-light-brown/20">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Healthcare program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Healthcare Access</h3>
                  <p className="text-muted-foreground mb-4">
                    Improving healthcare access through mobile clinics, medical supplies, and training community health
                    workers in remote areas.
                  </p>
                  <Link
                    href="/programs/healthcare"
                    className="text-ubuntu-red font-medium inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-ubuntu-light-brown/20">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Economic empowerment program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Economic Empowerment</h3>
                  <p className="text-muted-foreground mb-4">
                    Supporting entrepreneurship, vocational training, and microfinance initiatives to help communities
                    achieve economic independence.
                  </p>
                  <Link
                    href="/programs/economic"
                    className="text-ubuntu-red font-medium inline-flex items-center group"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
              >
                View All Programs
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16 text-ubuntu-dark-brown">
              Voices of Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 border-ubuntu-light-brown/20">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-ubuntu-yellow/60">
                      <path d="M13.415.43c-2.523-.21-4.694.695-6.599 2.316C4.911 4.368 3.807 6.66 3.307 9.26A29.3 29.3 0 0 0 2.57 17.33c.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L13.415.43zm21.951 0c-2.523-.21-4.694.695-6.599 2.316-1.905 1.622-3.01 3.913-3.31 6.514-.335 2.66-.503 5.255-.503 7.772.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L35.366.43z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground flex-1 mb-6">
                    "The Ubuntu Charity Foundation transformed our village by building a school and training our
                    teachers. Now our children have hope for a better future."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Testimonial"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-ubuntu-dark-brown">Amara Nkosi</h4>
                      <p className="text-sm text-muted-foreground">Community Leader, Tanzania</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-ubuntu-light-brown/20">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-ubuntu-yellow/60">
                      <path d="M13.415.43c-2.523-.21-4.694.695-6.599 2.316C4.911 4.368 3.807 6.66 3.307 9.26A29.3 29.3 0 0 0 2.57 17.33c.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L13.415.43zm21.951 0c-2.523-.21-4.694.695-6.599 2.316-1.905 1.622-3.01 3.913-3.31 6.514-.335 2.66-.503 5.255-.503 7.772.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L35.366.43z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground flex-1 mb-6">
                    "The microloan program helped me start my own business. Now I can provide for my family and even
                    employ three people from my community."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Testimonial"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-ubuntu-dark-brown">David Okafor</h4>
                      <p className="text-sm text-muted-foreground">Entrepreneur, Nigeria</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-ubuntu-light-brown/20">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-ubuntu-yellow/60">
                      <path d="M13.415.43c-2.523-.21-4.694.695-6.599 2.316C4.911 4.368 3.807 6.66 3.307 9.26A29.3 29.3 0 0 0 2.57 17.33c.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L13.415.43zm21.951 0c-2.523-.21-4.694.695-6.599 2.316-1.905 1.622-3.01 3.913-3.31 6.514-.335 2.66-.503 5.255-.503 7.772.056 5.43.846 9.45 2.471 12.096 1.881 3.047 4.037 4.574 6.57 4.574 1.444 0 2.579-.83 3.401-2.471.846-1.607 1.266-3.48 1.266-5.611 0-2.007-.386-3.925-1.146-5.73-.761-1.805-1.717-2.717-2.87-2.717-1.014 0-1.647.386-1.897 1.146a2.132 2.132 0 0 0-.12.697c0 .232.035.58.12 1.026.075.447.12.783.12 1.026 0 .762-.241 1.431-.735 2.012-.493.58-1.129.87-1.896.87-1.106 0-2.057-.603-2.87-1.796-.813-1.194-1.214-2.634-1.214-4.335 0-4.168 1.354-7.652 4.074-10.45 2.72-2.798 6.06-4.257 10.03-4.396L35.366.43z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground flex-1 mb-6">
                    "The mobile health clinic saved my daughter's life. We now have regular access to healthcare that we
                    never had before. I'm forever grateful."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Testimonial"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-ubuntu-dark-brown">Grace Mutua</h4>
                      <p className="text-sm text-muted-foreground">Mother, Kenya</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16 text-ubuntu-dark-brown">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Fundraising gala"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-ubuntu-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      Jun 15, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Annual Fundraising Gala</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-ubuntu-red" />
                      <span>Grand Hotel, New York City</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Join us for an evening of inspiration, entertainment, and giving as we celebrate our impact and
                      raise funds for future initiatives.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                    >
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Volunteer day"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-ubuntu-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      Jul 8, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Community Volunteer Day</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-ubuntu-red" />
                      <span>Central Park, Chicago</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Roll up your sleeves and make a difference! Join us for a day of community service projects that
                      will help local families in need.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                    >
                      Sign Up
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-ubuntu-light-brown/20">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Charity run"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-ubuntu-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      Aug 20, 2023
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-ubuntu-dark-brown">Ubuntu Charity 5K Run</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-ubuntu-red" />
                      <span>Riverside Park, San Francisco</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Run for a cause! Participate in our annual 5K to raise awareness and funds for clean water
                      projects in rural communities.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                    >
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
                asChild
              >
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-ubuntu-red text-white rounded-xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Make a Difference Today</h2>
                  <p className="text-white/90 mb-8 text-lg">
                    Your donation, no matter how small, can change lives. Join our community of supporters and help us
                    create lasting impact in communities around the world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="rounded-full bg-ubuntu-yellow hover:bg-ubuntu-yellow/90 text-ubuntu-dark-brown"
                      asChild
                    >
                      <Link href="/donate/mpesa">Donate Now</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-ubuntu-red"
                      asChild
                    >
                      <Link href="/volunteer">Become a Volunteer</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Children smiling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-ubuntu-dark-brown">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to receive updates on our work, upcoming events, and ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ubuntu-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="sm:w-auto bg-ubuntu-red hover:bg-ubuntu-red/90 text-white">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
