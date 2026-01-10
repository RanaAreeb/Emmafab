"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { CartDrawer } from "./cart-drawer"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Show header when at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down
        setIsVisible(false)
      } else {
        // Show header when scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Desktop Floating Header */}
      <header className={`hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-4 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                Contact
              </Link>
            </nav>

            {/* Cart Button - Positioned on the right */}
            <div className="absolute right-4">
              <CartDrawer />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Static Header - No backdrop blur for performance */}
      <header className="md:hidden sticky top-0 z-50 bg-background border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Cart Button - Positioned on the right */}
            <div>
              <CartDrawer />
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
