"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700"
        >
          Browse Products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="mt-8 space-y-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-4 rounded-xl border border-gray-100 p-4"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <Link href={`/products/${product.id}`} className="font-medium text-gray-900 hover:text-brand-700">
                {product.name}
              </Link>
              <p className="text-sm text-gray-500">{formatPrice(product.price)} each</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-50"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-6 text-center text-sm">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="rounded-full border border-gray-200 p-1.5 hover:bg-gray-50"
                aria-label="Increase quantity"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
            <span className="w-20 text-right font-semibold">
              {formatPrice(product.price * quantity)}
            </span>
            <button
              onClick={() => removeItem(product.id)}
              className="text-gray-400 hover:text-red-500"
              aria-label="Remove item"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-2 border-t border-gray-100 pt-6">
        <div className="flex w-full max-w-xs justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Clear Cart
          </button>
          <button className="rounded-lg bg-brand-600 px-6 py-2 text-sm font-medium text-white hover:bg-brand-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
