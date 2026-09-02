"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-500">Have a question? We&apos;d love to hear from you.</p>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          {submitted ? (
            <div className="rounded-xl bg-brand-50 p-6 text-brand-700">
              Thanks for reaching out! We&apos;ll get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-brand-500"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-brand-500"
              />
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-600 px-6 py-2 font-medium text-white hover:bg-brand-700"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-brand-600" />
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-sm text-gray-500">support@shopsy.example</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-brand-600" />
            <div>
              <h3 className="font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-500">+92 300 1234567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-brand-600" />
            <div>
              <h3 className="font-medium text-gray-900">Address</h3>
              <p className="text-sm text-gray-500">Karachi, Sindh, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
