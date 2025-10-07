import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Leaf } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Natural Cosmetics
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-balance leading-tight mb-6">
              Embrace Your
              <span className="block text-primary font-medium relative">
                Natural Beauty
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M5 6C50 2 100 10 150 6C200 2 250 10 295 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
              Transform your skincare routine with EmmaFab's premium collection of natural cosmetics, crafted with the
              finest ingredients for radiant, healthy skin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-transparent border-2 hover:bg-primary/5"
              >
                Learn Our Story
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                100% Natural
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                Trusted Brand
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <Image
                  src="/images/logo.jpg"
                  alt="EmmaFab Cosmetics"
                  width={300}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs font-medium mt-2">Natural</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float delay-500">
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-xs font-medium mt-2">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
