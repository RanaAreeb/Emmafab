import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Heart, Globe, Users, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sustainability - EmmaFab Cosmetics",
  description: "Learn about EmmaFab's commitment to sustainability, ethical sourcing, and environmental responsibility.",
}

const sustainabilityInitiatives = [
  {
    title: "Ethical Sourcing",
    icon: <Users className="h-8 w-8" />,
    description: "We work directly with women's cooperatives and local communities to ensure fair wages and sustainable practices.",
    details: "Our partnerships support over 500 families across West Africa, providing stable income and preserving traditional knowledge."
  },
  {
    title: "Zero Waste Packaging",
    icon: <Recycle className="h-8 w-8" />,
    description: "All our packaging is recyclable, biodegradable, or reusable, minimizing environmental impact.",
    details: "We use glass containers, paper-based packaging, and minimal plastic components that can be easily recycled."
  },
  {
    title: "Carbon Neutral Shipping",
    icon: <Globe className="h-8 w-8" />,
    description: "We offset all shipping emissions through verified carbon offset programs.",
    details: "Every order is carbon-neutral, supporting reforestation and renewable energy projects worldwide."
  },
  {
    title: "Organic Certification",
    icon: <Leaf className="h-8 w-8" />,
    description: "All our ingredients are certified organic, ensuring no harmful pesticides or chemicals.",
    details: "We maintain strict organic standards and regularly audit our supply chain for compliance."
  }
]

const impactStats = [
  { number: "500+", label: "Families Supported", description: "Through fair trade partnerships" },
  { number: "100%", label: "Organic Ingredients", description: "Certified organic sourcing" },
  { number: "0", label: "Waste to Landfill", description: "All packaging is recyclable" },
  { number: "50%", label: "Carbon Reduction", description: "Compared to conventional cosmetics" }
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our commitment to environmental responsibility and ethical practices guides everything we do, 
              from ingredient sourcing to packaging and shipping.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Sustainability Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At EmmaFab, we believe that beauty should never come at the cost of our planet or its people. 
              Our commitment to sustainability is woven into every aspect of our business, from the way we source 
              ingredients to how we package and ship our products.
            </p>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground">
                "We are committed to creating beauty products that are not only good for your skin but also 
                good for the planet. Every decision we make is guided by our values of sustainability, 
                ethical sourcing, and environmental responsibility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainabilityInitiatives.map((initiative, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        {initiative.icon}
                      </div>
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                    <p className="text-sm text-muted-foreground">{initiative.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Ethical Sourcing</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe in supporting the communities where our ingredients are grown. Our direct 
                  partnerships with women's cooperatives ensure fair wages, sustainable farming practices, 
                  and the preservation of traditional knowledge.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Direct trade relationships with local communities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Fair wages and working conditions for all partners</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Support for women's empowerment and education</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Preservation of traditional farming methods</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/black-soap-ad.jpg"
                  alt="Ethical sourcing practices"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/stretch-marks-cream.jpg"
                  alt="Sustainable packaging"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Sustainable Packaging</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our commitment to sustainability extends to every aspect of our packaging. We use 
                  materials that are not only beautiful but also environmentally responsible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Glass containers that can be reused or recycled</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Biodegradable shipping materials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Minimal plastic usage with recyclable alternatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Paper-based packaging from sustainable sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Future Goals</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're constantly working to improve our environmental impact and social responsibility. 
              Here are our goals for the coming years:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">B-Corp Certification</h3>
                  <p className="text-muted-foreground">Achieving B-Corp certification to meet the highest standards of social and environmental performance.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Carbon Negative</h3>
                  <p className="text-muted-foreground">Going beyond carbon neutral to become carbon negative by 2026.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community Impact</h3>
                  <p className="text-muted-foreground">Supporting 1000+ families through our ethical sourcing partnerships.</p>
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
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the change. Choose products that are good for you and good for the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Shop Sustainable Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
