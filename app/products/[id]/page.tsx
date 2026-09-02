import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { getProductById, getRelatedProducts, products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/products" className="hover:text-brand-700">Products</Link> / {product.name}
      </nav>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        </div>

        <div>
          <span className="text-sm font-medium uppercase tracking-wide text-brand-600">
            {product.category}
          </span>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-2 flex items-center gap-1 text-sm text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {product.rating} rating
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-gray-600">{product.longDescription}</p>

          <div className="mt-6">
            {product.inStock ? (
              <AddToCartButton product={product} />
            ) : (
              <span className="inline-block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900">Related Products</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
