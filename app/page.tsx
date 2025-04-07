import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product-card"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-brand">StyleHub</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="nav-link text-sm font-medium transition-colors hover:text-brand">
                Women
              </Link>
              <Link href="#" className="nav-link text-sm font-medium transition-colors hover:text-brand">
                Men
              </Link>
              <Link href="#" className="nav-link text-sm font-medium transition-colors hover:text-brand">
                Accessories
              </Link>
              <Link href="#" className="nav-link text-sm font-medium transition-colors hover:text-brand">
                Sale
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-brand text-white">
                3
              </Badge>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Hero image"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="relative z-20 container flex flex-col justify-center h-full pt-16">
            <div className="max-w-xl animate-slideUp">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Spring Collection 2025
              </h1>
              <p className="mt-4 max-w-md text-white/80 text-lg">
                Discover the latest trends in fashion and explore our new arrivals for the season.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-brand text-white hover:bg-brand-dark">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our most popular products based on sales and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="py-16 bg-brand-muted">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl">Browse our collections and find your perfect style.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  href="#"
                  key={category.name}
                  className="category-card group relative h-[250px] overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="category-card-image object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <span className="inline-flex items-center text-sm font-medium text-white">
                        Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl">
              The latest additions to our collection, fresh off the runway.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white">
              View All Products
            </Button>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
              alt="Newsletter background"
              fill
              className="object-cover brightness-[0.85]"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-md mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6 text-white/80">
                Stay updated with our latest collections, exclusive offers, and fashion news.
              </p>
              <div className="flex justify-center">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-brand">StyleHub</h3>
              <p className="text-muted-foreground text-sm">Your destination for modern fashion and accessories.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand transition-colors">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Button>
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">Payment Methods</p>
                <div className="flex gap-2">
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Visa
                  </div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    MC
                  </div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Amex
                  </div>
                  <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    PayPal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2025 StyleHub. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const featuredProducts = [
  {
    id: 1,
    name: "Classic Cotton Shirt",
    category: "Women's Apparel",
    price: 49.99,
    discountPrice: null,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Men's Apparel",
    price: 79.99,
    discountPrice: 59.99,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 129.99,
    discountPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Oversized Sweater",
    category: "Women's Apparel",
    price: 89.99,
    discountPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
  },
]

const categories = [
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1000&auto=format&fit=crop",
  },
]

const newArrivals = [
  {
    id: 5,
    name: "Linen Blend Dress",
    category: "Women's Apparel",
    price: 119.99,
    discountPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Tailored Blazer",
    category: "Men's Apparel",
    price: 189.99,
    discountPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Minimalist Watch",
    category: "Accessories",
    price: 149.99,
    discountPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Canvas Sneakers",
    category: "Footwear",
    price: 69.99,
    discountPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
  },
]

