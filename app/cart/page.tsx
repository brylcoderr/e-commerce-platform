"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Cotton Shirt",
      category: "Women's Apparel",
      price: 49.99,
      quantity: 1,
      color: "White",
      size: "M",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      category: "Men's Apparel",
      price: 79.99,
      quantity: 2,
      color: "Blue",
      size: "32",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 129.99,
      quantity: 1,
      color: "Black",
      size: "One Size",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    },
  ])

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: number) => {
    const itemToRemove = cartItems.find((item) => item.id === id)
    setCartItems((prev) => prev.filter((item) => item.id !== id))

    if (itemToRemove) {
      toast({
        title: "Item removed",
        description: `${itemToRemove.name} has been removed from your cart.`,
      })
    }
  }

  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const handleApplyPromo = () => {
    if (!promoCode) return

    setIsApplyingPromo(true)

    // Simulate API call
    setTimeout(() => {
      setIsApplyingPromo(false)
      toast({
        title: "Promo code applied",
        description: "Your discount has been applied to the order.",
      })
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-10">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-brand transition-colors">
            <ArrowLeft className="h-4 w-4" /> Continue shopping
          </Link>

          <div className="flex items-center gap-2 mb-8">
            <ShoppingBag className="h-6 w-6 text-brand" />
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-lg border shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader className="bg-brand-muted">
                      <TableRow>
                        <TableHead className="w-[120px]">Product</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id} className="animate-fadeIn">
                          <TableCell>
                            <div className="relative h-[80px] w-[80px] overflow-hidden rounded-md">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <h3 className="font-medium hover:text-brand transition-colors">
                                <Link href={`/products/${item.id}`}>{item.name}</Link>
                              </h3>
                              <div className="text-sm text-muted-foreground">
                                <p>Color: {item.color}</p>
                                <p>Size: {item.size}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-brand-muted hover:text-brand"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-medium text-brand">
                            ${(item.price * item.quantity).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 hover:bg-brand-muted hover:text-brand"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="animate-slideUp">
                <Card className="border-none shadow-md">
                  <CardHeader className="bg-brand-muted">
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span className="text-brand text-xl">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand hover:bg-brand-dark">Proceed to Checkout</Button>
                  </CardFooter>
                </Card>

                <Card className="mt-6 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Have a promo code?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="focus-visible:ring-brand"
                      />
                      <Button
                        variant="outline"
                        className="border-brand text-brand hover:bg-brand hover:text-white"
                        onClick={handleApplyPromo}
                        disabled={isApplyingPromo || !promoCode}
                      >
                        {isApplyingPromo ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : (
                          "Apply"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
              <ShoppingBag className="h-16 w-16 text-brand mb-4" />
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="bg-brand hover:bg-brand-dark">
                <Link href="/">Start Shopping</Link>
              </Button>
            </div>
          )}
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

