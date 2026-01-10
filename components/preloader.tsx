"use client"

/**
 * High-Performance Global Preloader Component
 * 
 * This component ensures zero-buffering and perfect parallax calculations by:
 * 1. Waiting for window.load event (all assets/images ready)
 * 2. Animating loader out with GSAP timeline (curtain effect)
 * 3. Calling ScrollTrigger.refresh() onComplete for accurate parallax math
 * 4. Hiding content during load to prevent FOUC and parallax jumps
 * 
 * PARALLAX BEST PRACTICES:
 * - Apply `will-change: transform` to parallax elements (use .parallax-element class or style)
 * - Use `priority` prop for above-the-fold images in Next.js Image component
 * - Ensure parallax elements have `transform: translateZ(0)` for GPU acceleration
 * - Use ScrollTrigger.refresh() after any dynamic content changes or layout shifts
 * - Apply .parallax-image class to images used in parallax effects
 * 
 * Example usage for parallax elements:
 * ```tsx
 * <div className="parallax-element">
 *   <Image src="/hero.jpg" priority className="parallax-image" />
 * </div>
 * ```
 */

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface PreloaderProps {
  children: React.ReactNode
}

export function Preloader({ children }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined") return

    // Register ScrollTrigger plugin (safe to call multiple times)
    try {
      gsap.registerPlugin(ScrollTrigger)
    } catch (e) {
      // Plugin already registered, ignore error
    }

    // Prevent multiple animations (important for React Strict Mode)
    if (hasAnimated.current) return

    // Animate logo, text, and progress bar entrance on mount
    const entranceTl = gsap.timeline({ delay: 0.2 })
    
    if (logoRef.current) {
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8, y: 20 })
      entranceTl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, 0)
    }
    
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 15 })
      entranceTl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }, 0.2)
    }
    
    if (progressRef.current) {
      gsap.set(progressRef.current, { opacity: 0, scaleX: 0 })
      entranceTl.to(progressRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
      }, 0.4)
    }

    // Wait for window load event to ensure all assets are loaded
    const handleLoad = () => {
      if (hasAnimated.current) return
      if (!preloaderRef.current || !curtainRef.current || !contentRef.current) return

      hasAnimated.current = true

      // Animate preloader elements out before curtain animation
      const exitTl = gsap.timeline()
      
      // Fade out logo, text, and progress bar first
      exitTl.to(
        [logoRef.current, textRef.current, progressRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
        },
        0
      )

      // Create GSAP timeline for smooth exit animation
      const tl = gsap.timeline({
        delay: 0.3, // Small delay after elements fade out
        onStart: () => {
          // Make content visible in DOM before animation starts (opacity will be animated by GSAP)
          if (contentRef.current) {
            contentRef.current.style.visibility = "visible"
          }
          setIsContentVisible(true)
        },
        onComplete: () => {
          // Hide preloader after animation completes
          setIsLoading(false)
          
          // Critical: Refresh ScrollTrigger after content is visible to ensure accurate parallax calculations
          // Use requestAnimationFrame to ensure DOM updates are complete
          requestAnimationFrame(() => {
            if (typeof window !== "undefined" && ScrollTrigger) {
              ScrollTrigger.refresh()
              
              // Additional refresh after a short delay to catch any delayed renders
              setTimeout(() => {
                ScrollTrigger.refresh()
              }, 100)
            }
          })
          
          // Clean up preloader from DOM after animation
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none"
          }
        },
      })

      // Elegant curtain effect - slide up with fade using power4.inOut easing
      tl.to(curtainRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      }, 0)

      // Fade in content smoothly as curtain slides up
      gsap.set(contentRef.current, { opacity: 0, y: 20 })
      
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5" // Start 0.5s before previous animation ends for smooth overlap
      )
    }

    // Check if page is already loaded (for client-side navigation or fast loads)
    if (document.readyState === "complete") {
      // Small delay to ensure smooth transition and DOM is ready
      const timer = setTimeout(handleLoad, 150)
      return () => clearTimeout(timer)
    } else {
      window.addEventListener("load", handleLoad, { once: true })
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <>
      {/* Preloader Curtain */}
      {isLoading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-[9999] pointer-events-auto"
          style={{
            willChange: "transform, opacity",
          }}
        >
          <div
            ref={curtainRef}
            className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10 flex flex-col items-center justify-center"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)", // GPU acceleration
            }}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow-delay" />
            </div>

            {/* Logo and Brand - Premium Design */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4">
              {/* Animated Logo Container */}
              <div ref={logoRef} className="relative">
                {/* Glowing orb behind logo */}
                <div className="absolute inset-0 -z-10 bg-primary/30 rounded-full blur-3xl scale-150 animate-pulse-slow opacity-50" />
                
                {/* Logo card with elegant styling */}
                <div className="relative bg-gradient-to-br from-background/90 via-background/70 to-primary/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/30 backdrop-blur-xl transform transition-all duration-500 hover:scale-105">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                    <Image
                      src="/images/logo.webp"
                      alt="EmmaFab.shop"
                      fill
                      className="object-contain drop-shadow-lg"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Brand Name with Typography */}
              <div ref={textRef} className="text-center space-y-2 sm:space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
                  EmmaFab
                  <span className="text-primary font-normal">.shop</span>
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium tracking-[0.3em] uppercase mt-2">
                  Premium Natural Beauty
                </p>
              </div>

              {/* Elegant Progress Bar */}
              <div ref={progressRef} className="relative w-64 sm:w-72 md:w-80 h-1 bg-primary/10 rounded-full overflow-hidden mt-6 backdrop-blur-sm">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary/90 to-primary/70 rounded-full shadow-lg shadow-primary/50"
                  style={{
                    width: "0%",
                    animation: "loadingProgress 2s ease-in-out infinite",
                    boxShadow: "0 0 20px rgba(5, 150, 105, 0.5)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Hidden until loading completes to prevent FOUC and parallax jumps */}
      <div
        ref={contentRef}
        style={{
          visibility: "hidden", // Will be set to "visible" by GSAP timeline onStart
          opacity: 0,
          willChange: "opacity, visibility",
          minHeight: "100vh", // Prevent layout shift
        }}
      >
        {children}
      </div>
    </>
  )
}
