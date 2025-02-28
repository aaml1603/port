"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedBackgroundPaths } from "./animated-background-paths"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const socialLinks = [
    { href: "https://github.com/aaml1603", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://twitter.com", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <AnimatedBackgroundPaths />

      <motion.div
        className="container mx-auto px-4 py-16 text-center relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
        >
          Web Developer & Designer
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
          {"Hello I am".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4 last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.1 + letterIndex * 0.03,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                  className="inline-block text-transparent bg-clip-text 
                             bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                             dark:from-white dark:to-white/80"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
          <br />
          Andres<span className="text-primary"> Mendez!</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build modern, responsive websites and web applications with a focus on clean design and exceptional user
          experience.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            asChild
            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold 
                 bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                 text-black dark:text-white transition-all duration-300 
                 hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                 hover:shadow-md dark:hover:shadow-neutral-800/50"
          >
            <Link href="#projects">
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">View My Work</span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold 
                 bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                 text-black dark:text-white transition-all duration-300 
                 hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                 hover:shadow-md dark:hover:shadow-neutral-800/50"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                {link.icon}
              </Link>
            </Button>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Button variant="ghost" size="icon" asChild>
            <Link href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

