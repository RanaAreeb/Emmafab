"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Leaf, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

interface Particle {
  id: number
  x: number
  y: number
  delay: number
  duration: number
}

export function HeroSection() {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  const [particles, setParticles] = useState<Particle[]>([])
  
  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    // Further reduced particles on mobile for better performance
    const particleCount = isMobile ? 3 : 8
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
    }))
    setParticles(generatedParticles)
  }, [isMobile])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
        
        {/* Simplified animated radial gradients - using CSS animations for better performance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(5,150,105,0.12),transparent_60%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_60%)] animate-pulse-slow-delay"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,150,105,0.03)_0%,transparent_25%,transparent_75%,rgba(16,185,129,0.03)_100%)]"></div>
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(5,150,105,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(5,150,105,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Shimmer effect - using CSS animation for better performance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-shimmer"></div>
      </div>

      {/* Optimized floating particles - completely disabled on mobile for performance */}
      {!shouldReduceMotion && !isMobile && particles.length > 0 && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '3px',
            height: '3px',
            transform: 'translateZ(0)', // GPU acceleration
            willChange: 'transform',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-primary/30 rounded-full"></div>
        </motion.div>
      ))}
      
      {/* Removed large floating orbs for better performance */}

      {/* Simplified animated orbs - disabled on mobile, reduced blur for performance */}
      {!shouldReduceMotion && (
        <>
          <div className={`absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-primary/15 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl'} animate-pulse-slow`} style={{ willChange: isMobile ? 'auto' : 'transform' }}></div>
          <div className={`absolute bottom-20 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 bg-secondary/20 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl'} animate-pulse-slow-delay`} style={{ willChange: isMobile ? 'auto' : 'transform' }}></div>
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 md:pt-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0.2 : 0.5 }}
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20 ${isMobile ? 'shadow-lg' : 'backdrop-blur-sm shadow-lg'}`}
            >
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              )}
              {shouldReduceMotion && <Sparkles className="w-4 h-4" />}
              Premium Natural Cosmetics
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-balance leading-tight mb-4 md:mb-6">
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0.2 : 0.6 }}
                className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block"
              >
                Embrace Your
              </motion.span>
              <motion.span
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: shouldReduceMotion ? 0.2 : 0.6 }}
                className="block text-primary font-medium relative text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl mt-2"
              >
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                  Natural Beauty
                </span>
                {!shouldReduceMotion && (
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-primary/30"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M5 6C50 2 100 10 150 6C200 2 250 10 295 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                )}
              </motion.span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 text-pretty leading-relaxed">
              Transform your skincare routine with EmmaFab.shop's premium collection of natural cosmetics, crafted with the
              finest ingredients for radiant, healthy skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 md:mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent border-2 hover:bg-primary/5 w-full sm:w-auto"
              >
                <Link href="/our-story">
                  Learn Our Story
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.7, duration: shouldReduceMotion ? 0.2 : 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm"
            >
              {[
                { icon: Leaf, text: "100% Natural", color: "text-green-500" },
                { icon: Sparkles, text: "Premium Quality", color: "text-primary" },
                { icon: Star, text: "Trusted Brand", color: "text-yellow-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.8 + index * 0.1, duration: shouldReduceMotion ? 0.2 : 0.4 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 transition-all"
                >
                  <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${item.color}`} />
                  <span className="text-muted-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0.3 : 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto" style={{ perspective: shouldReduceMotion ? "none" : "1000px" }}>
              <motion.div
                whileHover={shouldReduceMotion || isMobile ? {} : { rotateY: 5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-primary/20 shadow-2xl"
                style={{ transformStyle: shouldReduceMotion ? "flat" : "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src="/images/logo.webp"
                  alt="EmmaFab.shop"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain relative z-10"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl sm:rounded-3xl blur-xl -z-10"></div>
              </motion.div>

              {!shouldReduceMotion && (
                <motion.div
                  animate={isMobile ? {} : {
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg backdrop-blur-sm"
                >
                  {!isMobile && (
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto"
                    >
                      <Leaf className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                    </motion.div>
                  )}
                  {isMobile && (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                      <Leaf className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                    </div>
                  )}
                  <p className="text-xs font-medium mt-1 sm:mt-2 text-center">Natural</p>
                </motion.div>
              )}

              {!shouldReduceMotion && (
                <motion.div
                  animate={isMobile ? {} : {
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg backdrop-blur-sm"
                >
                  {!isMobile && (
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto"
                    >
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-secondary" />
                    </motion.div>
                  )}
                  {isMobile && (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-secondary" />
                    </div>
                  )}
                  <p className="text-xs font-medium mt-1 sm:mt-2 text-center">Premium</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
