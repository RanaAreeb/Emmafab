"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Detect mobile device for performance optimization
    const isMobileDevice = typeof window !== "undefined" && (
      window.innerWidth < 1024 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    )
    
    // Disable smooth scroll on mobile devices - native scroll is much better for performance
    if (isMobileDevice) {
      return
    }

    // Only enable smooth scroll on desktop for better performance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1, // Reduced from 2 for better performance
      infinite: false,
      // Performance optimizations
      lerp: 0.1, // Faster lerp for better responsiveness
      syncTouch: false, // Disable touch sync for better performance
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

