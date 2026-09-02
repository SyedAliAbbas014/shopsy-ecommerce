# Shopsy — AI-Powered E-Commerce Website

A full-stack e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a RAG-powered AI shopping assistant. Built as an AI-Driven Website Development project using Claude Code and Spec-Kit Plus.

**Live Site:** _[add your Vercel URL here after deploying]_
**Backend API:** _[add your Render/Railway URL here after deploying]_
**Demo Video:** _[add your YouTube/Drive link here]_

---

## Project Overview

Shopsy is a modern e-commerce storefront where users can browse products, filter/search by category, view detailed product pages, manage a shopping cart, and chat with an AI assistant that answers questions grounded in the actual product catalog (via Retrieval-Augmented Generation).

## Features

- 🏠 Homepage with hero section, featured products, and category browsing
- 🛍️ Product listing page with live search and category filtering
- 📄 Individual product detail pages with related items
- 🛒 Fully working shopping cart (add/remove/update quantity, persisted in session)
- ℹ️ About and Contact pages
- 🤖 RAG-powered AI chatbot widget — answers grounded in real product data
- 📱 Fully responsive (mobile-first) design
- ⚡ Fast performance via Next.js App Router and optimized images

## Technology Stack

**Frontend**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

**Backend (Chatbot)**
- FastAPI (Python)
- OpenAI API (embeddings + chat completion)
- Qdrant Cloud (vector database, free tier)
- Neon Serverless Postgres (chat history, free tier)

**Deployment**
- Vercel (frontend, free tier)
- Render (backend, free tier)

---

## Project Structure

```
shopsy-ecommerce/
├── .spec/
│   ├── constitution.md       # Project mission & principles
│   ├── plan.md                # Development plan
│   └── tasks/                 # 8 task files
├── app/
│   ├── page.tsx                # Homepage
│   ├── layout.tsx
│   ├── globals.css
│   ├── products/
│   │   ├── page.tsx             # Product listing
│   │   └── [id]/page.tsx        # Product detail
│   ├── cart/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── AddToCartButton.tsx
│   └── ChatWidget.tsx           # AI chatbot UI
├── lib/
│   ├── products.ts               # Product data
│   ├── cart-context.tsx          # Cart state management
│   └── utils.ts
├── backend/                      # FastAPI RAG chatbot
│   ├── main.py                    # API entrypoint
│   ├── services/
│   │   ├── rag_service.py          # Qdrant + OpenAI logic
│   │   ├── db_service.py           # Neon Postgres logic
│   │   └── product_data.py         # Product data (mirrors frontend)
│   └── requirements.txt
├── package.json
└── README.md
```

---

## Installation & Local Setup

### Prerequisites
- Node.js 18+
- Python 3.10+
- Free accounts: [OpenAI](https://platform.openai.com), [Qdrant Cloud](https://cloud.qdrant.io), [Neon](https://neon.tech)

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Copy env file and set your backend URL
cp .env.local.example .env.local
# Edit .env.local -> NEXT_PUBLIC_API_URL=http://localhost:8000

# Run development server
npm run dev
```

Visit `http://localhost:3000`.

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy env file and fill in your keys
cp .env.example .env
# Edit .env with your OPENAI_API_KEY, QDRANT_URL, QDRANT_API_KEY, DATABASE_URL

# Seed Qdrant with product embeddings (run once)
python services/rag_service.py

# Start the API server
uvicorn main:app --reload --port 8000
```

Visit `http://localhost:8000/docs` for the interactive API docs.

---

## API Setup Instructions

1. **OpenAI**: Create an account at platform.openai.com → API Keys → generate a new key. Add a small amount of credit (a few dollars covers a whole semester project).
2. **Qdrant Cloud**: Sign up free at cloud.qdrant.io → create a free cluster → copy the cluster URL and API key.
3. **Neon**: Sign up free at neon.tech → create a project → copy the connection string (use the "pooled connection" string for serverless).

## Environment Variables Needed

**Frontend (`.env.local`)**
```
NEXT_PUBLIC_API_URL=<your backend URL>
```

**Backend (`backend/.env`)**
```
OPENAI_API_KEY=<your key>
QDRANT_URL=<your cluster url>
QDRANT_API_KEY=<your key>
DATABASE_URL=<your neon connection string>
FRONTEND_URL=<your deployed frontend URL>
```

---

## Deployment (Free)

See the **Deployment Guide** section below — full step-by-step for deploying the frontend to Vercel and backend to Render, both on free tiers.

## Screenshots

_[Add screenshots of your homepage, product page, cart, and chatbot here before submission]_
