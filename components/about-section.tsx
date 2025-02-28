"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Database, Lightbulb } from "lucide-react"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const skills = [
    "JavaScript",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Figma",
    "UI/UX",
    "Responsive Design",
  ]

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Building responsive, performant websites and web applications using modern technologies.",
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces with a focus on aesthetics and usability.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs to power your digital products.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Consultation",
      description: "Providing expert advice on web technologies, architecture, and best practices.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <motion.div
        ref={ref}
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a web developer with a keen eye for design and a commitment to creating exceptional digital
            experiences. With expertise in both frontend and backend technologies, I bring ideas to life through clean,
            efficient code.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My journey in web development began over 5 years ago when I built my first website. Since then, I've
              continuously expanded my skills and knowledge, staying up-to-date with the latest technologies and best
              practices in the industry.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating clean, accessible, and user-friendly websites that provide exceptional user
              experiences. Whether it's a simple landing page or a complex web application, I approach each project with
              the same level of dedication and attention to detail.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-8 text-center">
          Services I Offer
        </motion.h3>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

