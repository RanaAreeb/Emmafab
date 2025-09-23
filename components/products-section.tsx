import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Black Soap",
    description:
      "Deep cleansing, exfoliating, and moisturizing properties. Helps balance oil production and soothe irritation.",
    image: "/images/black-soap-ad.jpg",
    benefits: ["Deep Cleanse", "Exfoliate", "Moisturize", "Balance Oil"],
  },
  {
    id: 2,
    name: "Stretch Marks Cream",
    description: "Softens stretch marks by evening skin tone, boosting elasticity and hydrating for smoother skin.",
    image: "/images/stretch-marks-cream.jpg",
    benefits: ["Even Skin Tone", "Boost Elasticity", "Deep Hydration", "Smooth Texture"],
  },
  {
    id: 3,
    name: "Moringa Slim Tea",
    description:
      "Made from dried moringa leaves, packed with vitamins and antioxidants. Provides energy while being caffeine-free.",
    image: "/images/moringa-slim-tea.jpg",
    benefits: ["100% Natural", "Rich in Vitamins", "Antioxidants", "Caffeine Free"],
  },
  {
    id: 4,
    name: "Natural Hair Cream",
    description: "Provides light to medium hold while keeping hair soft and touchable with natural movement.",
    image: "/images/hair-cream.jpg",
    benefits: ["Light Hold", "Soft Touch", "Natural Movement", "Nourishing"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our carefully curated range of natural cosmetics, each formulated with the finest ingredients for
            exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-medium mb-4 text-primary">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.benefits.map((benefit) => (
                    <span key={benefit} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
