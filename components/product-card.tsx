"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, ShoppingCart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export interface ProductProps {
  id: number
  name: string
  category: string
  price: number
  discountPrice?: number | null
  badge?: string | null
  image: string
}

export function ProductCard({ product }: { product: ProductProps }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { toast } = useToast()

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
    <Card className="product-card overflow-hidden border-none shadow-sm">
      <div className="relative h-[300px] overflow-hidden">
        {product.badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-brand text-white hover:bg-brand-dark">{product.badge}</Badge>
        )}
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="product-card-image object-cover"
          />
        </Link>
        <div className="quick-actions absolute bottom-3 right-3 flex flex-col gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-white/90 shadow-sm hover:bg-brand hover:text-white"
                  onClick={handleToggleWishlist}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? "fill-brand text-brand" : ""}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-white/90 shadow-sm hover:bg-brand hover:text-white"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Add to cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/products/${product.id}`}>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-white/90 shadow-sm hover:bg-brand hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Quick view</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </CardDescription>
        <CardTitle className="text-base font-medium">
          <Link href={`/products/${product.id}`} className="hover:text-brand transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-medium">
          {product.discountPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-rose-500">${product.discountPrice}</span>
              <span className="text-sm text-muted-foreground line-through">${product.price}</span>
            </div>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

