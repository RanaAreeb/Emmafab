import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients, ensuring purity and effectiveness in every product.",
  },
  {
    icon: Heart,
    title: "Skin Loving",
    description: "Our formulations are gentle yet effective, designed to nourish and care for all skin types.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each product undergoes rigorous testing to meet our high standards of quality and safety.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in building a community of confident individuals who embrace their natural beauty.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-balance mb-6">
            Dedicated to natural beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            EmmaFab.shop is committed to creating premium natural beauty products that enhance your skin's natural
            radiance. Our carefully crafted formulations combine traditional wisdom with modern innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
