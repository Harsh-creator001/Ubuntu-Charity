"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Work",
    href: "#",
    children: [
      { name: "Programs", href: "/programs" },
      { name: "Vision", href: "/vision" },
      { name: "Core Values", href: "/core-values" },
    ],
  },
  { name: "Upcoming Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/30",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-ubuntu-red"
                        : "text-muted-foreground hover:text-ubuntu-red hover:bg-muted/50",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {(openDropdown === item.name || (!openDropdown && pathname?.startsWith(item.href))) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-48 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                pathname === child.href
                                  ? "bg-muted text-ubuntu-red font-medium"
                                  : "text-muted-foreground hover:bg-muted hover:text-ubuntu-red",
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-ubuntu-red"
                        : "text-muted-foreground hover:text-ubuntu-red hover:bg-muted/50",
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button className="rounded-full bg-ubuntu-red hover:bg-ubuntu-red/90 text-white" asChild>
              <Link href="/donate/mpesa">Donate Now</Link>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-muted text-ubuntu-red"
                            : "text-muted-foreground hover:bg-muted hover:text-ubuntu-red",
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", openDropdown === item.name ? "rotate-180" : "")}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-2 text-sm rounded-md transition-colors",
                                  pathname === child.href
                                    ? "bg-muted text-ubuntu-red font-medium"
                                    : "text-muted-foreground hover:bg-muted hover:text-ubuntu-red",
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-muted text-ubuntu-red"
                            : "text-muted-foreground hover:bg-muted hover:text-ubuntu-red",
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Button className="w-full rounded-full bg-ubuntu-red hover:bg-ubuntu-red/90 text-white" asChild>
                  <Link href="/donate/mpesa">Donate Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
