"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const products = [
  {
    id: 1,
    name: "Black Soap",
    slug: "black-soap",
    description:
      "Deep cleansing, exfoliating, and moisturizing properties. Helps balance oil production and soothe irritation.",
    image: "/images/BS.webp",
    benefits: ["Deep Cleanse", "Exfoliate", "Moisturize", "Balance Oil"],
    category: "Skincare",
  },
  {
    id: 2,
    name: "Natural Hair Cream",
    slug: "natural-hair-cream",
    description: "Provides light to medium hold while keeping hair soft and touchable with natural movement.",
    image: "/images/HC.webp",
    benefits: ["Light Hold", "Soft Touch", "Natural Movement", "Nourishing"],
    category: "Hair Care",
  },
  {
    id: 3,
    name: "Kids Hair Cream",
    slug: "kids-hair-cream",
    description: "Specially formulated for children's delicate hair, providing gentle nourishment and natural styling.",
    image: "/images/KH.webp",
    benefits: ["Child-Safe", "Natural Ingredients", "Easy Styling"],
    category: "Hair Care",
  },
]

export function ProductsSection() {
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements - reduced blur on mobile */}
      <div className={`absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}></div>
      <div className={`absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Premium Selection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our carefully curated range of natural cosmetics, each formulated with the finest ingredients for
            exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: isMobile ? "-100px" : "-50px" }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1, duration: shouldReduceMotion ? 0.2 : 0.4 }}
              style={{ willChange: isMobile ? 'auto' : 'transform, opacity' }}
            >
              <Card className="group overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative" style={{ willChange: isMobile ? 'auto' : 'transform' }}>
                {/* Unique corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-[3/2] overflow-hidden relative bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ transform: 'translateZ(0)', willChange: isMobile ? 'auto' : 'transform' }}
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm shadow-lg">
                      {product.category}
                    </Badge>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                </div>
                
                <CardContent className="p-6 bg-card flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Benefits with unique animation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <motion.span
                        key={benefit}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 + benefitIndex * 0.05, duration: shouldReduceMotion ? 0.1 : 0.2 }}
                        whileHover={shouldReduceMotion || isMobile ? {} : { scale: 1.05 }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-medium rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-200 relative overflow-hidden group/benefit"
                        style={{ transform: 'translateZ(0)', willChange: isMobile ? 'auto' : 'transform' }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent translate-x-[-100%] group-hover/benefit:translate-x-[100%] transition-transform duration-500"></span>
                        <CheckCircle2 className="w-3 h-3 relative z-10" />
                        <span className="relative z-10">{benefit}</span>
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <Link href={`/products/${product.slug}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
