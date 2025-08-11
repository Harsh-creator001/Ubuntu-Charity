"use client"

import React from 'react'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import{ motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


const slides = [
   {
    id:"call",
    title:"Humanity Towards All",
    content:"Join us in our mission to create sustainable change and empower communities across the globe.",
    image:"/images/slide1.jpg",
    href: "/placeholder",
    alt:"I am because we are",
   },
   {
    id: "pillar1",
    title:"Special Thanks,",
    content:"Special thanks to Levon Bakers who have been part an percel of our programs by donating delicious cakes",
    image:"/images/partners.jpg" ,
    alt:"United for a change",
   },
   {
    id: "members",
    title:"Dear Members,",
    image:"/images/slide3.jpg",
    content:"You have all shown a tremendous support by contributing to and attending our programs",
    alt:"members support",
   },  
]

export function HerosSlider() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [touchStart, setTouchStart] = useState(0)
    const[touchEnd, setTouchEnd] = useState(0)

    //auto play functionality

    useEffect(()=>{
        if (!autoplay)return

        const interval = setInterval(()=>{
            setCurrentSlide((prev)=>(prev === slides.length - 1 ? 0:prev + 1))
        }, 6000)

        return () => clearInterval(interval)
    },[autoplay])

    //pause on hover

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
    <section className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
        <div className="absolute inset-0 bg-black/50 z-20" />
        <div className="relative">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[600px]"
                    >
                        <Image 
                            src= {slides[currentSlide].image || "/placeholder.svg"}
                            alt={slides[currentSlide].alt}
                            fill
                            className="object-cover object-[center_40%]"
                        />
                </motion.div>
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg sm:text-xl">
                            {slides[currentSlide].content}
                        </p>
                        {/* <div className="z-45 mt-10 flex flex-col sm:flex-row gap-4">
                          
                          <Button
                            size="lg"
                            className="cursor-pointer rounded-full text-lg px-8 bg-ubuntu-red hover:bg-ubuntu-red/90 text-white"
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
                        </div> */}
                
                </motion.div>
            </AnimatePresence> 
            {/* <a
              key={slides[currentSlide].id}
              href={slides[currentSlide].href}>
              <AnimatePresence mode='wait'>
                <motion.div
                    key={slides[currentSlide].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                      <Button
                        size="lg"
                        className="rounded-full text-lg px-8 bg-ubuntu-red hover:bg-ubuntu-red/90 text-white z-auto"
                        asChild>
                          Donate
                      </Button>
                </motion.div>    

              </AnimatePresence>
            </a> */}
            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-40">
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
            <div className="flex justify-center mt-8 space-x-2 opacity=0.5">
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
   

    </section>
    // <div>herosSlider</div>
  )
}
