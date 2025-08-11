"use client"

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { MainNav } from "@/components/main-nav";
import { Card } from "@/components/ui/card";
import { id } from "date-fns/locale";

// blog posts from Executive Members
const blogs = [
    {
        id:1,
        name:"Onesmus Wambua",
        title:"Chairman/Founder, Ubuntu Charity Foundation",
        content:"Leadership is not about position, it's about impact. At Ubuntu Charity Foundation, we stand as a beacon of hope, not just by offering aid, but by igniting purpose in every life we touch. Our mission is simple yet powerful: to serve with integrity, to lead with compassion, and to inspire a generation that uplifts others as it rises. Together, we are not just changing stories  we are rewriting destinies.",
        image:"/images/slide1.jpg",
        alt:"Founder"
    },
    {
        id:2,
        name:"Ann Makau",
        title:"Vice Chair",
        content:"Lorem Ipsuim",
        image:"/images/slide2.jpg",
        alt:"Vice"
    },
    {
        id:3,
        name:"Bernard Mbaika",
        title:"Treasurer, Ubuntu Charity Foundation",
        content:"Salute to us all. Fundraising is the gentle art of teaching the joy of giving. Under the spirit of togetherness, we keep it high to make a smile on each and every face around us. Through our mission, vision and key responsibilities under the club's constitution guiding us, we will see a success to our goals.To our donors, well-wishers and all our supporters not forgetting our group members who have been with us till the start, we are a family. To the big, united family, as we work to create light for others, we naturally light our own way. Giving does not only preceed receiving; it is the reason for it. It is in giving that we receive and God always blesses a cheerful giver. All I can say is thank you very much and let unity be our mover. May God bless you all.",
        image:"/images/slide3.jpg",
        alt:"Treasurer"
    },
    {
        id:4,
        name:"Muoki Anna",
        title:"Secretary, Ubuntu Charity Foundation",
        content:"I am deeply committed to the spirit of Ubuntu — I am because we are.This principle guides every step we take in uplifting the lives of the vulnerable in our communities.Our mission is rooted in compassion, unity, and action. We believe that real change begins when people come together to serve a cause greater than themselves. Through our visits to children’s homes, donations, mentorship programs, and community outreach, we aim to bring hope, dignity, and opportunity to those who need it most.Leadership, to me, is not about position — it's about responsibility. It's about inspiring others to care, to act, and to believe in a better tomorrow. I am humbled to walk this journey with dedicated volunteers and supporters who share in this vision.Together, we are building more than a charity — we are nurturing a family where love leads, and every act of kindness becomes a foundation for the future.",
        image:"/images/slide4.jpg",
        alt:"Secretary"
    },
    {
        id:5,
        name:"Purity Kimotho",
        title:"Organizing Sectretary, Ubuntu Charity Foundation",
        content:"It starts with attention to details ,commitment to creativity and passion for  collaboration.As secretaries we are often the backbone of our teams. As ubuntu charity foundation we provide critical support in ensuring that every logistical details is in place .",
        image:"/images/slide5.jpg",
        alt:"Org Sec"
    },

]

export default function BlogPage(){
      const [currentSlide, setCurrentSlide] = useState(0)
      const [autoplay, setAutoplay] = useState(true)
      const [touchStart, setTouchStart] = useState(0)
      const [touchEnd, setTouchEnd] = useState(0)
    
      // Autoplay functionality
      useEffect(() => {
        if (!autoplay) return
    
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))
        }, 6000)
    
        return () => clearInterval(interval)
      }, [autoplay])
    
      // Pause autoplay on hover
      const handleMouseEnter = () => setAutoplay(false)
      const handleMouseLeave = () => setAutoplay(true)
    
      // Navigation functions
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))
        setAutoplay(false)
        setTimeout(() => setAutoplay(true), 5000)
      }
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))
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



    return(
       <> 
        <div> <MainNav /></div>
        <div
            className="relative overflow-hidden bg-muted/30 py-16 md:py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
         
            <div className="container">
                <div className="flex flex-row items-center gap-3 mb-6">
                    {blogs.map((blog, index) => (
                        <Card key={blog.id} className={cn("overflow-hidden rounded-md", currentSlide === index ? "border-card border-green-500 ":"")}
                        >
                            <div className= {cn(
                                "relative w-[80px] h-[80px] transition-all overflow-hidden justify-between space-x-2 duration-300",
                                currentSlide === index ? "w-[100px] h-[100px]":""

                            )}>
                                <Image
                                    src={blog.image || "/placeholder.svg"}
                                    alt={blog.name}
                                    fill
                                    onClick={() => goToSlide(index)}
                                    className= " object-cover rounded-md cursor-pointer"
                                />
                            </div>
                        </Card>
                    ))}
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={blogs[currentSlide].id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        >
                        <h1 className="text-3xl font-bold tracking-tight sm:text-3xl mb-1 text-ubuntu-dark-brown">
                            {blogs[currentSlide].name}
                        </h1>
                        <h2 className="text-2xl font-light italic tracking-tight sm:text-2xl mb-6 text-ubuntu-dark-brown">
                            {blogs[currentSlide].title}
                        </h2>
                        <p className="text-md text-justify text-muted-foreground mb-8">{blogs[currentSlide].content}</p>
                        {/* <p className="text-lg text-muted-foreground mb-8">{blogs[currentSlide].description}</p> */}

                        </motion.div>
                    </AnimatePresence>
                    <div className="relative">
                        <AnimatePresence mode="wait">
                        <motion.div
                            key={blogs[currentSlide].id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                            src={blogs[currentSlide].image || "/placeholder.svg"}
                            alt={blogs[currentSlide].alt}
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
                                className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 text-ubuntu-red "
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
                    {blogs.map((_, index) => (    
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        currentSlide === index ? "bg-ubuntu-red w-7 h-3" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 slide-in-from-top-8",
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                
                    />

                    ))}
                </div>
                


            </div>

        </div>  
       </>  

    )
}