"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageGallery } from "@/components/image-gallery"
import { useToast } from "@/components/ui/use-toast"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState("1")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { toast } = useToast()

  const product = {
    id: 1,
    name: "Classic Cotton Shirt",
    category: "Women's Apparel",
    price: 49.99,
    rating: 4.5,
    reviewCount: 127,
    description:
      "A versatile and comfortable classic cotton shirt that's perfect for any occasion. Made from premium cotton fabric that's soft against the skin and breathable throughout the day.",
    features: [
      "100% premium cotton",
      "Regular fit",
      "Button-down collar",
      "Machine washable",
      "Available in multiple colors",
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    ],
    colors: ["White", "Black", "Blue", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
  }

  const similarProducts = [
    {
      id: 2,
      name: "Relaxed Fit Oxford Shirt",
      category: "Women's Apparel",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Striped Button-Up Shirt",
      category: "Women's Apparel",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Linen Blend Shirt",
      category: "Women's Apparel",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Short Sleeve Cotton Tee",
      category: "Women's Apparel",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-10">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-brand transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to shopping
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="animate-fadeIn">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            <div className="space-y-6 animate-slideDown">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</p>
                <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-brand text-brand" : "fill-muted text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold mt-2 text-brand">${product.price}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Color</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant="outline"
                        className={`h-auto py-1 px-3 border-2 transition-all ${selectedColor === color ? "border-brand bg-brand-muted text-brand" : "hover:border-brand hover:text-brand"}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Select value={quantity} onValueChange={setQuantity}>
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Qty" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
                        <SelectItem key={qty} value={qty.toString()}>
                          {qty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2 flex-1">
                    <Button className="flex-1 bg-brand hover:bg-brand-dark" onClick={handleAddToCart}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`${isWishlisted ? "bg-brand-muted border-brand" : ""}`}
                      onClick={handleToggleWishlist}
                    >
                      <Heart className={`h-4 w-4 ${isWishlisted ? "fill-brand text-brand" : ""}`} />
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3 bg-brand-muted">
                  <TabsTrigger
                    value="description"
                    className="data-[state=active]:bg-brand data-[state=active]:text-white"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="features" className="data-[state=active]:bg-brand data-[state=active]:text-white">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="data-[state=active]:bg-brand data-[state=active]:text-white">
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4 animate-fadeIn">
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </TabsContent>
                <TabsContent value="features" className="pt-4 animate-fadeIn">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
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
                          className="text-brand"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4 animate-fadeIn">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Free standard shipping on orders over $75.</p>
                    <p>Standard shipping (3-7 business days): $5.99</p>
                    <p>Express shipping (1-3 business days): $12.99</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id} className="group">
                  <div className="product-card overflow-hidden rounded-lg border border-border shadow-sm">
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="product-card-image h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-brand transition-colors">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <p className="font-semibold mt-2 text-brand">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2025 StyleHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

