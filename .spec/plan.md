# Development Plan — Shopsy E-Commerce

## Phase 1: Setup (Day 1)
- Initialize Next.js 14 project with TypeScript, Tailwind, App Router
- Set up folder structure (app/, components/, lib/, backend/)
- Initialize Git repository and Spec-Kit Plus structure
- Install dependencies (lucide-react, class-variance-authority, clsx, tailwind-merge)

## Phase 2: Core Pages (Day 2–3)
- Build Navbar + Footer components
- Build Homepage (hero, featured products, categories, CTA)
- Build Products listing page (grid, filter by category, search)
- Build Individual Product page (details, images, related products)
- Build Cart page (add/remove items, quantity, total)
- Build About page
- Build Contact page

## Phase 3: Chatbot / RAG Backend (Day 4–5)
- Set up FastAPI backend with /chat endpoint
- Set up Qdrant Cloud collection, embed product data
- Connect OpenAI API for response generation
- Set up Neon Postgres for chat history storage
- Build ChatWidget React component (floating widget, typing indicator)
- Connect frontend widget to backend API

## Phase 4: Testing & Polish (Day 6)
- Test all pages on mobile + desktop
- Test chatbot accuracy against product data
- Fix console errors, broken links, responsive issues
- Add loading states and error handling everywhere

## Phase 5: Deployment (Day 7)
- Deploy frontend to Vercel (free tier)
- Deploy backend to Render/Railway free tier
- Set environment variables in both platforms
- Final smoke test on live URLs
- Record demo video

## Feature Checklist
- [ ] Homepage with hero + featured products
- [ ] Product listing with search/filter
- [ ] Product detail page
- [ ] Shopping cart (client-side state)
- [ ] About page
- [ ] Contact page
- [ ] RAG chatbot widget
- [ ] FastAPI backend with /chat endpoint
- [ ] Qdrant vector search integrated
- [ ] Neon Postgres chat history
- [ ] Responsive on all breakpoints
- [ ] Deployed live (frontend + backend)

## Timeline Estimation
~6–7 days for 2-person team, working in parallel (1 on frontend pages, 1 on backend/chatbot)

## Tech Stack
See `.spec/plan.md` → Technical Stack section in README.md

## File Structure
See project root `README.md` for full tree.
