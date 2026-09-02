"""
Shopsy RAG Chatbot Backend
FastAPI + OpenAI + Qdrant Cloud + Neon Postgres
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

from services.rag_service import get_relevant_products, generate_response
from services.db_service import init_db, save_chat_message, get_chat_history

load_dotenv()

app = FastAPI(title="Shopsy Chatbot API")

# Allow requests from your Next.js frontend (local + deployed)
origins = [
    "http://localhost:3000",
    os.getenv("FRONTEND_URL", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    query: str
    session_id: str = "default"


class ChatResponse(BaseModel):
    response: str
    session_id: str


@app.on_event("startup")
async def startup():
    await init_db()


@app.get("/")
async def root():
    return {"status": "Shopsy chatbot API is running"}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        # 1. Retrieve relevant product context from Qdrant
        context = get_relevant_products(request.query)

        # 2. Generate a grounded response using OpenAI
        answer = generate_response(request.query, context)

        # 3. Save to Neon Postgres chat history
        await save_chat_message(request.session_id, request.query, answer)

        # 4. Return response
        return ChatResponse(response=answer, session_id=request.session_id)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chatbot error: {str(e)}")


@app.get("/chat/history/{session_id}")
async def history(session_id: str):
    return await get_chat_history(session_id)
