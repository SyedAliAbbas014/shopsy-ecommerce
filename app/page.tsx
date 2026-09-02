import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, getCategories } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 6);
  const categories = getCategories();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            <Sparkles className="h-4 w-4" /> AI Shopping Assistant Included
          </span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Shop smarter with Shopsy
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            Curated products across electronics, fashion, home, and more — with an AI assistant that knows the whole catalog and helps you find exactly what you need.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700"
          >
            Shop Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-sm font-medium text-brand-700 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center font-medium text-gray-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / trust section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <Truck className="mx-auto mb-3 h-8 w-8 text-brand-600" />
            <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
            <p className="mt-1 text-sm text-gray-500">Orders processed and shipped within 24 hours.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-brand-600" />
            <h3 className="font-semibold text-gray-900">Secure Checkout</h3>
            <p className="mt-1 text-sm text-gray-500">Your data and payments are always protected.</p>
          </div>
          <div className="text-center">
            <Sparkles className="mx-auto mb-3 h-8 w-8 text-brand-600" />
            <h3 className="font-semibold text-gray-900">AI-Powered Help</h3>
            <p className="mt-1 text-sm text-gray-500">Chat with our assistant for instant product answers.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to find your next favorite thing?</h2>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-brand-700 transition hover:bg-brand-50"
        >
          Browse Products <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
