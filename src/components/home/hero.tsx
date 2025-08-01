"use client";

import { easeOut, motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextEffect } from "../ui/text-effect";

export default function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const words = ["innovative", "creative", "dynamic", "powerful", "elegant"];

  return (
    <section className="w-full relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Enhanced Background Texture */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-rgb) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-rgb) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--primary-rgb), var(--primary-rgb) 1px, transparent 1px, transparent 20px)`,
          }}
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Brief Description */}
          <motion.p
            className="max-w-[700px] text-lg md:text-xl text-muted-foreground"
            variants={item}
          >
            👋 Hello there, I am
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight"
            variants={item}
          >
            Viqar Mulya
          </motion.h1>

          {/* Brief Description */}
          <motion.div
            className="max-w-[700px] text-lg md:text-xl text-muted-foreground flex items-center"
            variants={item}
          >
            I create
            <TextEffect
              words={words}
              className="rounded-lg"
              textClassName="font-bold"
              effect={"bounce"}
              duration={3000}
            ></TextEffect>
            websites
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={item}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="https://s.id/cv-viqar">Download Resume</a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full px-8"
              >
                <Link href="/projects">View My Projects</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex space-x-4 mt-8" variants={item}>
            <motion.a
              href="https://github.com/viqarrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="www.linkedin.com/in/viqar-mulya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
