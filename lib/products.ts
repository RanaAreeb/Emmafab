export interface Product {
  id: number
  slug: string
  name: string
  description: string
  longDescription: string
  image: string
  images: string[]
  rating: number
  price: number
  originalPrice?: number
  category: string
  benefits: string[]
  ingredients: string[]
  howToUse: string[]
  inStock: boolean
  featured: boolean
}

export const products: Product[] = [
  {
    id: 1,
    slug: "black-soap",
    name: "EmmaFab Black Soap",
    description: "Deep cleansing with natural ingredients and gentle cleansing properties",
    longDescription:
      "EmmaFab black soap offers numerous benefits for the skin due to its natural ingredients and gentle cleansing properties. It's known for its ability to deep cleanse, exfoliate, and moisturize, while also helping to balance oil production and soothe irritation. Additionally, it may help reduce the appearance of dark spots, acne scars, and fine lines.",
    image: "/images/BS.webp",
    images: ["/images/BS.webp"],
    rating: 4.9,
    price: 24.99,
    originalPrice: 29.99,
    category: "Skincare",
    benefits: [
      "Deep cleansing and exfoliation",
      "Moisturizes and balances oil production",
      "Reduces dark spots and acne scars",
      "Soothes skin irritation",
      "Natural anti-aging properties",
    ],
    ingredients: ["Raw African Black Soap", "Shea Butter", "Coconut Oil", "Palm Oil", "Natural Glycerin"],
    howToUse: [
      "Wet your face or body with warm water",
      "Lather the black soap in your hands",
      "Gently massage onto skin in circular motions",
      "Rinse thoroughly with warm water",
      "Pat dry and follow with moisturizer",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    slug: "shea-butter",
    name: "EmmaFab Original Shea Butter",
    description: "Premium moisturizing for all skin types with high concentrations of fatty acids",
    longDescription:
      "EmmaFab Original Shea butter has high concentrations of fatty acids and vitamins for softening skin. EmmaFab Shea butter also has anti-inflammatory and healing abilities, which makes the body look fresh and clean always. Its moisturizing effects treat minor skin injuries like cuts, burns, and insect bites, and may help to reduce scarring.",
    image: "/images/SB.webp", // Using available image
    images: ["/images/SB.webp"],
    rating: 4.8,
    price: 19.99,
    originalPrice: 24.99,
    category: "Skincare",
    benefits: [
      "High concentrations of fatty acids and vitamins",
      "Anti-inflammatory and healing properties",
      "Treats minor skin injuries",
      "Reduces scarring appearance",
      "Deep moisturizing effects",
    ],
    ingredients: ["100% Pure Shea Butter", "Natural Vitamins A & E", "Essential Fatty Acids", "Natural Emollients"],
    howToUse: [
      "Take a small amount of shea butter",
      "Warm between your palms",
      "Apply to clean, dry skin",
      "Massage gently until absorbed",
      "Use daily for best results",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    slug: "stretch-marks-cream",
    name: "EmmaFab Stretch Marks Cream",
    description: "Advanced formula to soften the appearance of stretch marks and boost skin elasticity",
    longDescription:
      "EFCE Stretch mark cream helps to soften the appearance of stretch marks by evening out skin tone, boosting skin elasticity and hydrating, nourishing and locking in moisture to the skin - so in a nutshell helping the stretch marks blend into the skin, while hydrating it and soothing any itching caused by stretching skin.",
    image: "/images/stretch-marks-cream.jpg",
    images: ["/images/stretch-marks-cream.jpg"],
    rating: 4.7,
    price: 34.99,
    originalPrice: 39.99,
    category: "Skincare",
    benefits: [
      "Softens stretch marks appearance",
      "Evens out skin tone",
      "Boosts skin elasticity",
      "Deep hydration and nourishment",
      "Soothes itching from stretching skin",
    ],
    ingredients: ["Cocoa Butter", "Vitamin E Oil", "Collagen Peptides", "Hyaluronic Acid", "Natural Moisturizers"],
    howToUse: [
      "Clean the affected area",
      "Apply cream generously",
      "Massage in circular motions",
      "Use twice daily for best results",
      "Continue use for 8-12 weeks",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    slug: "moringa-slim-tea",
    name: "EmmaFab Moringa Slim Tea",
    description: "Premium moringa leaf tea with powerful antioxidants, natural energy boost, and wellness benefits from the miracle tree",
    longDescription:
      "Moringa Slim tea comes from the dried leaves of the Moringa oleifera tree. This tree is often called the 'miracle tree' due to its rich nutritional profile. Moringa leaves are packed with vitamins, minerals and antioxidants. The tea provides energy but is also caffeine free, making it an option for any time of day.",
    image: "/images/moringa-slim-tea.jpg",
    images: ["/images/moringa-slim-tea.jpg"],
    rating: 4.6,
    price: 29.99,
    category: "Wellness",
    benefits: [
      "Rich in vitamins and minerals",
      "Packed with antioxidants",
      "Natural energy boost",
      "Caffeine-free formula",
      "Supports overall wellness",
    ],
    ingredients: ["100% Pure Moringa Leaves", "Natural Antioxidants", "Essential Vitamins", "Minerals and Nutrients"],
    howToUse: [
      "Boil water to 200°F",
      "Add 1 tea bag or 1 tsp loose tea",
      "Steep for 5-7 minutes",
      "Remove tea bag or strain",
      "Enjoy hot or cold",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    slug: "natural-hair-cream",
    name: "EmmaFab Natural Hair Cream",
    description: "Light to medium hold styling cream that keeps hair soft and touchable",
    longDescription:
      "EmmaFab Natural hair Cream provides light to medium hold for your hair. Your hair stays soft and touchable while keeping some movement going. Perfect for natural styling without the stiffness of traditional gels.",
    image: "/images/HC.webp",
    images: ["/images/HC.webp"],
    rating: 4.5,
    price: 22.99,
    category: "Hair Care",
    benefits: [
      "Light to medium hold",
      "Keeps hair soft and touchable",
      "Maintains natural movement",
      "No stiffness or flaking",
      "Suitable for all hair types",
    ],
    ingredients: ["Natural Waxes", "Argan Oil", "Shea Butter", "Vitamin E", "Essential Oils"],
    howToUse: [
      "Start with damp or dry hair",
      "Take a small amount of cream",
      "Rub between palms to warm",
      "Apply evenly through hair",
      "Style as desired",
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    slug: "kids-hair-cream",
    name: "EmmaFab Kids Hair Cream",
    description: "Specially formulated for children's delicate hair, providing gentle nourishment and natural styling.",
    longDescription:
      "EmmaFab Kids Hair Cream is specially designed for children's delicate hair. Made with gentle, natural ingredients, it provides nourishment while keeping hair soft and manageable. Perfect for daily styling and care for your little ones.",
    image: "/images/KH.webp",
    images: ["/images/KH.webp"],
    rating: 4.8,
    price: 18.99,
    category: "Hair Care",
    benefits: [
      "Gentle formula for children",
      "Natural ingredients only",
      "Easy to apply and style",
      "No harsh chemicals",
      "Softens and nourishes hair",
    ],
    ingredients: ["Natural Oils", "Shea Butter", "Aloe Vera", "Vitamin E", "Gentle Emollients"],
    howToUse: [
      "Apply a small amount to damp hair",
      "Gently work through hair with fingers",
      "Style as desired",
      "Use daily for best results",
      "Suitable for all hair types",
    ],
    inStock: true,
    featured: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
