"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-10 h-10 rounded-full overflow-hidden"
      >
        <Image
          src="/images/ubuntu-logo.png"
          alt="Ubuntu Charity Foundation"
          width={40}
          height={40}
          className="object-contain"
        />
      </motion.div>
      {showText && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-lg font-bold leading-tight text-ubuntu-dark-brown">Ubuntu</span>
          <span className="text-xs leading-tight text-ubuntu-brown">Foundation</span>
        </motion.div>
      )}
    </Link>
  )
}
