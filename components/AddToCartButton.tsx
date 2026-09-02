"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700"
    >
      {added ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
