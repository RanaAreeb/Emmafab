import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Black Soap",
    slug: "black-soap",
    description:
      "Deep cleansing, exfoliating, and moisturizing properties. Helps balance oil production and soothe irritation.",
    image: "/images/BS.png",
    benefits: ["Deep Cleanse", "Exfoliate", "Moisturize", "Balance Oil"],
  },
 
  
  {
    id: 2,
    name: "Natural Hair Cream",
    slug: "natural-hair-cream",
    description: "Provides light to medium hold while keeping hair soft and touchable with natural movement.",
    image: "/images/HC.png",
    benefits: ["Light Hold", "Soft Touch", "Natural Movement", "Nourishing"],
  },
  {
    id: 3,
    name: "Kids Hair Cream",
    slug: "kids-hair-cream",
    description: "Specially formulated for children's delicate hair, providing gentle nourishment and natural styling.",
    image: "/images/KH.png",
    benefits: ["Child-Safe", "Natural Ingredients", "Easy Styling"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our carefully curated range of natural cosmetics, each formulated with the finest ingredients for
            exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">{product.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit) => (
                    <span key={benefit} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href={`/products/${product.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
