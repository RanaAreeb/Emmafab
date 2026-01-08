"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Users, Sparkles } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients, ensuring purity and effectiveness in every product.",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Skin Loving",
    description: "Our formulations are gentle yet effective, designed to nourish and care for all skin types.",
    color: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each product undergoes rigorous testing to meet our high standards of quality and safety.",
    color: "from-yellow-500/20 to-amber-500/10",
    iconColor: "text-yellow-500",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in building a community of confident individuals who embrace their natural beauty.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-150px" : "-100px" })

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative elements - reduced blur for performance on mobile */}
      <div className={`absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl'} -translate-x-1/2 -translate-y-1/2`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl'} translate-x-1/2 translate-y-1/2`}></div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Our Values
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Dedicated to natural beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            EmmaFab.shop is committed to creating premium natural beauty products that enhance your skin's natural
            radiance. Our carefully crafted formulations combine traditional wisdom with modern innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1, duration: shouldReduceMotion ? 0.2 : 0.5 }}
            >
              <Card className="group text-center border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full relative overflow-hidden" style={{ willChange: isMobile ? 'auto' : 'transform' }}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    whileHover={shouldReduceMotion || isMobile ? {} : { scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border/50 group-hover:border-primary/50 transition-colors`}
                    style={{ transform: 'translateZ(0)', willChange: isMobile ? 'auto' : 'transform' }}
                  >
                    <value.icon className={`h-10 w-10 ${value.iconColor}`} />
                  </motion.div>
                  
                  <h3 className="font-serif text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {value.description}
                  </p>
                  
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
