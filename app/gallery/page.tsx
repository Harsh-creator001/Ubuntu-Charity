"use client"

import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { motion } from "framer-motion"

// This would be replaced with actual gallery data from your CMS or database
const galleryItems = [
  {
    id: 1,
    title: "School Building Project",
    description: "Construction of a new school in rural Tanzania",
    image: "/placeholder.svg?height=400&width=600",
    category: "Education",
  },
  {
    id: 2,
    title: "Healthcare Outreach",
    description: "Mobile clinic providing healthcare services in Kenya",
    image: "/placeholder.svg?height=400&width=600",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Installing water purification systems in rural communities",
    image: "/placeholder.svg?height=400&width=600",
    category: "Water",
  },
  {
    id: 4,
    title: "Vocational Training",
    description: "Teaching valuable skills to empower community members",
    image: "/placeholder.svg?height=400&width=600",
    category: "Economic Empowerment",
  },
  {
    id: 5,
    title: "Agricultural Program",
    description: "Sustainable farming techniques for local farmers",
    image: "/placeholder.svg?height=400&width=600",
    category: "Agriculture",
  },
  {
    id: 6,
    title: "Women's Empowerment",
    description: "Supporting women entrepreneurs with microloans",
    image: "/placeholder.svg?height=400&width=600",
    category: "Economic Empowerment",
  },
  {
    id: 7,
    title: "Youth Leadership Camp",
    description: "Developing future leaders through mentorship and training",
    image: "/placeholder.svg?height=400&width=600",
    category: "Education",
  },
  {
    id: 8,
    title: "Community Center",
    description: "Building a gathering place for community activities",
    image: "/placeholder.svg?height=400&width=600",
    category: "Infrastructure",
  },
  {
    id: 9,
    title: "Solar Power Project",
    description: "Bringing renewable energy to off-grid communities",
    image: "/placeholder.svg?height=400&width=600",
    category: "Energy",
  },
]

export default function GalleryPage() {
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
              alt="Gallery of our work"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Gallery</h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              See the impact of our work through images from our projects around the world.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/80 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
