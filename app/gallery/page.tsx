"use client"

import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { motion } from "framer-motion"
import { link } from "fs"

// This would be replaced with actual gallery data from your CMS or database
const galleryItems = [
  {
    id: 1,
    title: "Syengoni Visit",
    description: "A visit to Syengoni School for mentorship and support",
    image: "/images/g15.JPG", 
    category: "Mentorship",
    link: "https://photos.google.com/share/AF1QipPZPD4KtXchwjl6BHu2a3zEQScz3M3CxL0e0pH7bMCyOP7sTmC_1sB_ayK-ZeYNQw?key=T2EyYnlIUWpWaER0TlE3ZWRsNWVPaXRFNFZWdG5R",
  },
  {
    id: 2,
    title: "2023 December Children's home visit",
    description: "On this celebration month of december we visited a children's home to spread joy while sharing meals, playing games, and providing gifts to the children.",
    image: "/images/mealsprep.jpg",
    category: "CHildren's Welfare",
    link: "https://photos.google.com/share/AF1QipMPNlz1bYa3nw848zD3zaaIV4pjzwX32NEVp95iMbhgk02aLwh9Emilxy03f1bXUg?key=dFdFVWFxaTY5TzVLVmtXVEM3S3BBazBDemprMzhR",
  },
  {
    id: 3,
    title: "Members Hike",
    description: "A team-building hike to promote wellness and camaraderie. On this hike we had a chance to bond, share ideas, and enjoy nature together.",
    image: "/images/hike.jpg",
    category: "Members Activities",
    link: "https://photos.google.com/share/AF1QipOcdYDWWq7MKEF99qc53zP5CmPbWDzj3VUVvMzUMs_pnHhTG8lLJcb84NB91u7NIQ?key=TDlaMnVJcW5YbjJaNUMtcFBneXZWd2cxb2VIR093",
  },
  {
    id: 4,
    title: "Members Philanthropy",
    description: "Teaching valuable skills to empower community members",
    image: "/images/g1.jpg",
    category: "Economic Empowerment",
  },
  {
    id: 5,
    title: "Members Philanthropy",
    description: "Sustainable farming techniques for local farmers",
    image: "/images/IMG-20240818-WA0145.jpg",
    category: "Agriculture",
  },
  {
    id: 6,
    title: "Members Philanthropy",
    description: "Supporting women entrepreneurs with microloans",
    image: "/images/g2.jpg",
    category: "Economic Empowerment",
  },
  {
    id: 7,
    title: "Youth Leadership Camp",
    description: "Developing future leaders through mentorship and training",
    image: "/images/g3.jpg",
    category: "Education",
  },
  {
    id: 8,
    title: "Community Center",
    description: "Building a gathering place for community activities",
    image: "/images/g10.jpg",
    category: "Community Development",
  },
  {
    id: 9,
    title: "Members Philanthropy",
    description: "Members engaging in community service.",
    image: "/images/g11.jpg",
    category: "Community Service",
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
              src="/images/g6.jpg"
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
              <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg block"
                >
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
              </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
