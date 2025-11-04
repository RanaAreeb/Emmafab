import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Sparkles, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ingredients - EmmaFab Cosmetics",
  description: "Discover the natural ingredients that make EmmaFab products so effective. Learn about their benefits and sourcing.",
}

const ingredients = [
  {
    name: "Shea Butter",
    image: "/images/black-soap-ad.jpg",
    origin: "West Africa",
    benefits: ["Deep Moisturizing", "Anti-inflammatory", "Vitamin A & E", "Natural SPF"],
    description: "Pure, unrefined shea butter from the karité tree, rich in fatty acids and vitamins that deeply nourish and protect the skin.",
    sourcing: "Sourced directly from women's cooperatives in Ghana and Burkina Faso, ensuring fair trade practices."
  },
  {
    name: "African Black Soap",
    image: "/images/black-soap-ad.jpg",
    origin: "West Africa",
    benefits: ["Deep Cleansing", "Exfoliating", "Antimicrobial", "Balances pH"],
    description: "Traditional black soap made from plantain skins, palm oil, and other natural ingredients, known for its gentle yet effective cleansing properties.",
    sourcing: "Handcrafted by traditional artisans using time-honored methods passed down through generations."
  },
  {
    name: "Moringa",
    image: "/images/moringa-slim-tea.jpg",
    origin: "Tropical Regions",
    benefits: ["Antioxidant Rich", "Anti-aging", "Nutrient Dense", "Energy Boosting"],
    description: "The 'miracle tree' leaves are packed with vitamins, minerals, and antioxidants that provide incredible health and beauty benefits.",
    sourcing: "Organically grown and sustainably harvested from certified farms in tropical regions."
  },
  {
    name: "Cocoa Butter",
    image: "/images/stretch-marks-cream.jpg",
    origin: "West Africa",
    benefits: ["Skin Repair", "Stretch Mark Prevention", "Antioxidants", "Softening"],
    description: "Pure cocoa butter extracted from cocoa beans, rich in antioxidants and natural fats that help repair and protect the skin.",
    sourcing: "Ethically sourced from sustainable cocoa farms, supporting local communities."
  },
  {
    name: "Argan Oil",
    image: "/images/hair-cream.jpg",
    origin: "Morocco",
    benefits: ["Hair Nourishment", "Skin Hydration", "Vitamin E", "Anti-aging"],
    description: "Cold-pressed argan oil from the argan tree, known as 'liquid gold' for its incredible moisturizing and anti-aging properties.",
    sourcing: "Sourced from women's cooperatives in Morocco, supporting local communities and traditional methods."
  },
  {
    name: "Coconut Oil",
    image: "/images/black-soap-ad.jpg",
    origin: "Tropical Regions",
    benefits: ["Antimicrobial", "Moisturizing", "Lauric Acid", "Skin Protection"],
    description: "Virgin coconut oil with high lauric acid content, providing natural antimicrobial and moisturizing benefits.",
    sourcing: "Organic, cold-pressed coconut oil from sustainable farms in tropical regions."
  }
]

export default function IngredientsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our Ingredients
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the powerful natural ingredients that make EmmaFab products so effective. 
              Each ingredient is carefully selected for its proven benefits and ethical sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Nature's Best Ingredients</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At EmmaFab, we believe in the power of nature. Our products are formulated with 
              the finest natural ingredients, each chosen for its unique properties and proven benefits. 
              We source our ingredients responsibly, ensuring they meet our high standards for quality, 
              purity, and ethical sourcing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% Natural</h3>
                <p className="text-sm text-muted-foreground">Pure, unprocessed ingredients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ethically Sourced</h3>
                <p className="text-sm text-muted-foreground">Fair trade and sustainable</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Proven Benefits</h3>
                <p className="text-sm text-muted-foreground">Scientifically backed results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Highest grade ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Featured Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ingredients.map((ingredient, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{ingredient.name}</CardTitle>
                      <Badge variant="secondary">{ingredient.origin}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{ingredient.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Sourcing:</strong> {ingredient.sourcing}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">Why Natural Ingredients Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">For Your Skin</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gentle and non-irritating for all skin types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rich in vitamins, minerals, and antioxidants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>No harsh chemicals or synthetic preservatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compatible with your skin's natural processes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">For the Environment</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Biodegradable and environmentally friendly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sustainably sourced from renewable resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Supporting local communities and fair trade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reducing chemical pollution in waterways</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Experience the Power of Nature</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our products and feel the difference that natural ingredients make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/products">Shop Products</Link>
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
