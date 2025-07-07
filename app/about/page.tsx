import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Calendar } from "lucide-react"
import { MainNav } from "@/components/main-nav"


export default function AboutPage() {
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
              alt="Team of volunteers"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Learn about our mission, vision, and the team behind Ubuntu Charity Foundation.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Founder with children"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ubuntu Charity Foundation was founded in 2008 by Dr. Amina Nkosi after witnessing the challenges faced
                  by communities in rural Africa. Growing up in a small village in Tanzania, Dr. Nkosi experienced
                  firsthand the lack of access to education and healthcare.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  After completing her education abroad, she returned with a vision to create sustainable change in her
                  community and beyond. What started as a small initiative to build a school in her village has grown
                  into an international organization working across 12 countries.
                </p>
                <p className="text-lg text-muted-foreground">
                  The name "Ubuntu" comes from the African philosophy that means "I am because we are." This belief in
                  our shared humanity and interconnectedness guides everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are guided by a clear mission and an ambitious vision for the future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To empower communities through sustainable development programs that address the root causes of
                  poverty and create lasting change.
                </p>
                <p className="text-muted-foreground">
                  We work hand-in-hand with local communities to develop solutions that are culturally appropriate,
                  environmentally sustainable, and economically viable.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-4">
                  A world where every person has access to education, healthcare, clean water, and economic
                  opportunities, regardless of where they were born.
                </p>
                <p className="text-muted-foreground">
                  We envision self-sufficient communities that are resilient, inclusive, and able to determine their own
                  futures.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These core principles guide our work and define our organizational culture.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach our work with empathy and a deep respect for the dignity of those we serve.
                </p>
              </Card>
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community and work collaboratively with local partners.
                </p>
              </Card>
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                    <path d="M10 9H8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We are committed to openness and accountability in all aspects of our work.
                </p>
              </Card>
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards and are honest in our actions and communications.
                </p>
              </Card>
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We design programs that create lasting impact and can be maintained by local communities.
                </p>
              </Card>
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We embrace diversity and ensure our programs are accessible to all, regardless of background.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated professionals who make our work possible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Amina Nkosi"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Dr. Amina Nkosi</h3>
                  <p className="text-primary mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    With over 20 years of experience in international development, Dr. Nkosi leads our organization with
                    vision and compassion.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Michael Chen" fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-primary mb-4">Chief Operations Officer</p>
                  <p className="text-muted-foreground text-sm">
                    Michael oversees our global operations and ensures our programs are executed efficiently and
                    effectively.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Sarah Okafor" fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Sarah Okafor</h3>
                  <p className="text-primary mb-4">Program Director</p>
                  <p className="text-muted-foreground text-sm">
                    Sarah leads our program development and implementation, bringing 15 years of field experience to our
                    work.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="James Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">James Rodriguez</h3>
                  <p className="text-primary mb-4">Chief Financial Officer</p>
                  <p className="text-muted-foreground text-sm">
                    James ensures financial transparency and manages our resources to maximize impact in the communities
                    we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Meet Our Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">50K+</h3>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">12</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">120+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">15</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Partners</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We collaborate with organizations that share our vision and values.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm">
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Partner ${i}`}
                    width={120}
                    height={60}
                    className="object-contain h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our Mission</h2>
                  <p className="text-primary-foreground/90 mb-8 text-lg">
                    There are many ways to get involved with Ubuntu Charity Foundation. Whether you want to donate,
                    volunteer, or partner with us, your support makes a difference.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" className="rounded-full">
                      Donate Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Become a Volunteer
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Volunteers working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
