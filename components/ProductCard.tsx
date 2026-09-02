"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {!product.inStock && (
          <span className="absolute left-2 top-2 rounded-full bg-gray-900/80 px-2 py-1 text-xs text-white">
            Out of stock
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {product.category}
        </span>
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-1 font-semibold text-gray-900 hover:text-brand-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center gap-1 text-sm text-yellow-500">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          <button
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
