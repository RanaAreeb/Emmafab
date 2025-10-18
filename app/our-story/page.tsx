import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Heart, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Story - EmmaFab Cosmetics",
  description: "Discover the journey of EmmaFab Cosmetics from traditional African beauty secrets to modern natural cosmetics.",
}

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From traditional African beauty secrets to modern natural cosmetics - 
              discover the journey that created EmmaFab Cosmetics.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Journey</h2>
            
            <div className="space-y-12">
              {/* 2018 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">2018</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Emma's journey began during a transformative trip to West Africa, where she discovered 
                    the incredible power of traditional beauty ingredients. She was amazed by the natural 
                    radiance of local women who used age-old recipes passed down through generations.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/black-soap-ad.jpg"
                    alt="Traditional African beauty ingredients"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2019 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">2019</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Learning & Experimentation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Emma spent months learning traditional preparation methods from local artisans. 
                    She experimented with different combinations of shea butter, black soap, and other 
                    natural ingredients, documenting their effects on various skin types.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/stretch-marks-cream.jpg"
                    alt="Emma learning traditional methods"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2020 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">2020</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">The First Products</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After extensive research and testing, Emma created her first products: pure shea butter 
                    and traditional black soap. She shared these with friends and family, who were amazed 
                    by the results and encouraged her to start a business.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/moringa-slim-tea.jpg"
                    alt="First EmmaFab products"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2021 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">2021</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">EmmaFab is Born</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    EmmaFab Cosmetics was officially launched with a mission to bring traditional African 
                    beauty secrets to the modern world. The brand quickly gained recognition for its 
                    authentic ingredients and effective formulations.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/hair-cream.jpg"
                    alt="EmmaFab brand launch"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 2022-2025 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">2022-2025</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Growth & Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, EmmaFab Cosmetics continues to grow, expanding our product line while staying 
                    true to our roots. We've helped thousands of customers discover the power of natural 
                    beauty and continue to innovate with new products that honor traditional wisdom.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/emmafab-logo-hd.png"
                    alt="EmmaFab today"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Authenticity</h3>
                  <p className="text-muted-foreground">
                    We stay true to traditional methods while adapting them for modern needs, 
                    ensuring every product maintains its authentic heritage.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous testing to ensure it meets our high standards 
                    for quality, safety, and effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We support the communities where our ingredients are sourced, ensuring fair 
                    trade practices and sustainable sourcing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Story</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the EmmaFab journey and discover the power of natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
