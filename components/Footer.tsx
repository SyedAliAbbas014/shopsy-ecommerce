import Link from "next/link";
import { Store, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-brand-700">
              <Store className="h-5 w-5" />
              Shopsy
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Shop smarter with curated products and an AI assistant that actually knows the catalog.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/products" className="hover:text-brand-700">Products</Link></li>
              <li><Link href="/about" className="hover:text-brand-700">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand-700">Contact</Link></li>
              <li><Link href="/cart" className="hover:text-brand-700">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-800">Follow Us</h4>
            <div className="flex gap-4 text-gray-500">
              <Facebook className="h-5 w-5 hover:text-brand-700" />
              <Instagram className="h-5 w-5 hover:text-brand-700" />
              <Twitter className="h-5 w-5 hover:text-brand-700" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Shopsy. Built as part of an AI-driven web development project.
        </div>
      </div>
    </footer>
  );
}
