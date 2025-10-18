import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Award, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - EmmaFab Cosmetics",
  description: "Learn about EmmaFab Cosmetics' commitment to natural beauty, premium ingredients, and sustainable practices.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About EmmaFab Cosmetics
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are passionate about creating premium natural beauty products that enhance your skin's 
              natural radiance with carefully crafted formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At EmmaFab Cosmetics, we believe that beauty should be natural, sustainable, and accessible. 
                  Our mission is to provide premium natural beauty products that not only enhance your skin's 
                  natural radiance but also respect the environment and your health.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We carefully source our ingredients from trusted suppliers and use traditional methods 
                  combined with modern science to create products that deliver real results.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/logo.webp"
                  alt="EmmaFab Cosmetics Logo"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Natural Ingredients</h3>
                  <p className="text-muted-foreground">
                    We use only the finest natural ingredients, carefully selected for their proven benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Committed to eco-friendly practices and sustainable sourcing of all our ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous testing to ensure the highest quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building a community of beauty enthusiasts who value natural, healthy skincare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                EmmaFab Cosmetics was born from a passion for natural beauty and a desire to create products 
                that truly work. Our founder, Emma, discovered the power of natural ingredients while traveling 
                through West Africa, where she learned traditional beauty secrets passed down through generations.
              </p>
              <p className="mb-6">
                Inspired by the incredible results she experienced with natural ingredients like shea butter, 
                black soap, and moringa, Emma decided to bring these time-tested beauty secrets to a wider audience. 
                She combined traditional knowledge with modern formulation techniques to create products that are 
                both effective and safe.
              </p>
              <p>
                Today, EmmaFab Cosmetics continues to honor these traditions while innovating for the future, 
                ensuring that every product we create meets the highest standards of quality, safety, and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Experience Natural Beauty?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our range of premium natural beauty products and join thousands of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
