import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>

      <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-24 md:h-24 bg-accent/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 md:pt-20">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Natural Cosmetics
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-balance leading-tight mb-4 md:mb-6">
              <span className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Embrace Your</span>
              <span className="block text-primary font-medium relative text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl">
                Natural Beauty
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-primary/30" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M5 6C50 2 100 10 150 6C200 2 250 10 295 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
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

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                100% Natural
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full"></div>
                Trusted Brand
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-primary/20">
                <Image
                  src="/images/logo.webp"
                  alt="EmmaFab.shop"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg animate-float">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                  <Leaf className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <p className="text-xs font-medium mt-1 sm:mt-2 text-center">Natural</p>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg animate-float delay-500">
                <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-secondary/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-secondary" />
                </div>
                <p className="text-xs font-medium mt-1 sm:mt-2 text-center">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
