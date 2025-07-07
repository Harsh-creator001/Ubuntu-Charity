"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      'Ubuntu Charity Foundation is guided by the African philosophy of Ubuntu – "I am because we are." We believe in the interconnectedness of humanity and work to create a world where everyone has access to education, healthcare, and economic opportunities.',
    description:
      "Through sustainable development programs and community-led initiatives, we empower individuals to break the cycle of poverty and build a better future for themselves and their communities.",
    image: "/images/slide1.jpg",
    alt: "Community members working together",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "We envision a world where every person has the opportunity to live with dignity, access basic needs, and realize their full potential regardless of where they were born.",
    description:
      "By fostering sustainable development and community empowerment, we aim to create lasting change that transforms lives and communities for generations to come.",
    image: "/images/slide2.jpg",
    alt: "Children in a classroom",
  },
  {
    id: "values",
    title: "Core Values",
    content:
      "Our work is guided by core values that reflect the spirit of Ubuntu: compassion, integrity, respect, accountability, and innovation.",
    description:
      "We believe in working collaboratively with communities, respecting local knowledge and culture, and maintaining the highest standards of transparency and accountability in all our operations.",
    image: "/images/slide3.jpg",
    alt: "Team working together",
  },
]

export function MissionVisionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div
      className="relative overflow-hidden bg-muted/30 py-16 md:py-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-ubuntu-dark-brown">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{slides[currentSlide].content}</p>
              <p className="text-lg text-muted-foreground mb-8">{slides[currentSlide].description}</p>
              <Button
                variant="outline"
                className="group border-ubuntu-brown text-ubuntu-brown hover:bg-ubuntu-brown hover:text-white"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </motion.div>
          </AnimatePresence>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 text-ubuntu-red"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 text-ubuntu-red"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === index ? "bg-ubuntu-red w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
