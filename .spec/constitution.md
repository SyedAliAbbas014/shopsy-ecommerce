# Shopsy - Constitution

## Mission
Shopsy is a modern, fast, and trustworthy e-commerce platform that makes discovering and buying products simple, with an AI shopping assistant that helps customers find exactly what they need.

## Core Principles
1. **Simplicity First** – Every page should be understandable in seconds; no clutter, no confusing flows.
2. **Speed Matters** – Pages load fast, images are optimized, and interactions feel instant.
3. **Trust & Transparency** – Clear pricing, honest product info, visible policies, no dark patterns.
4. **Accessible to Everyone** – Usable on any device, any screen size, keyboard and screen-reader friendly.
5. **AI as a Helper, Not a Gimmick** – The chatbot must give genuinely useful, context-aware answers about products, not generic filler.

## Technical Standards
- TypeScript for type safety across the entire frontend
- Tailwind CSS for all styling (no inline styles, no CSS-in-JS)
- Component-based architecture (small, reusable, single-responsibility components)
- Clean code practices: meaningful names, commented complex logic, no dead code
- API routes typed end-to-end (request/response interfaces shared where possible)

## Design Guidelines
- Mobile-first approach — design for 375px width first, scale up
- Consistent spacing using Tailwind's spacing scale (4, 8, 16, 24, 32px increments)
- Accessible design — proper contrast ratios, alt text, focus states, semantic HTML
- Fast performance — lazy-load images, minimize bundle size, use Next.js Image component

## Development Rules
- Every feature branch must reference a task file in `.spec/tasks/`
- No feature is "done" until it works on both mobile and desktop
- Chatbot responses must be grounded in actual product data (RAG), never hallucinated
- Environment secrets never committed to git (`.env.local` stays gitignored)
