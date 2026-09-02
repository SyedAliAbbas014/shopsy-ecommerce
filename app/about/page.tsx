import { Target, Users, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">About Shopsy</h1>
      <p className="mt-4 leading-relaxed text-gray-600">
        Shopsy was built as a demonstration of AI-driven web development — using Claude Code
        and Spec-Kit Plus to plan, build, and ship a full-stack e-commerce experience. Our goal
        is simple: make online shopping fast, honest, and genuinely helpful, powered by an AI
        assistant that actually understands the product catalog instead of guessing.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-100 p-6 text-center">
          <Target className="mx-auto mb-3 h-8 w-8 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-1 text-sm text-gray-500">
            Make product discovery simple and trustworthy for every shopper.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 p-6 text-center">
          <Users className="mx-auto mb-3 h-8 w-8 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Built By Students</h3>
          <p className="mt-1 text-sm text-gray-500">
            A 2-person team project exploring AI-assisted, spec-driven development.
          </p>
        </div>
        <div className="rounded-xl border border-gray-100 p-6 text-center">
          <Rocket className="mx-auto mb-3 h-8 w-8 text-brand-600" />
          <h3 className="font-semibold text-gray-900">Modern Stack</h3>
          <p className="mt-1 text-sm text-gray-500">
            Next.js, TypeScript, Tailwind, FastAPI, and a RAG-powered chatbot.
          </p>
        </div>
      </div>
    </div>
  );
}
