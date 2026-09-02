"""
RAG (Retrieval-Augmented Generation) service.
Embeds product data into Qdrant Cloud, retrieves relevant products for a
query, and generates a grounded response using OpenAI.
"""

import os
from openai import OpenAI
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

from services.product_data import PRODUCTS

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

qdrant = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY"),
)

COLLECTION_NAME = "shopsy_products"
EMBEDDING_MODEL = "text-embedding-3-small"
CHAT_MODEL = "gpt-4o-mini"


def embed_text(text: str) -> list[float]:
    response = client.embeddings.create(model=EMBEDDING_MODEL, input=text)
    return response.data[0].embedding


def setup_collection():
    """Run this once to create the collection and upload product embeddings."""
    collections = [c.name for c in qdrant.get_collections().collections]
    if COLLECTION_NAME not in collections:
        qdrant.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
        )

    points = []
    for idx, product in enumerate(PRODUCTS):
        text = (
            f"{product['name']} — {product['category']}. "
            f"Price: ${product['price']}. {product['description']} "
            f"{product['longDescription']}"
        )
        vector = embed_text(text)
        points.append(
            PointStruct(
                id=idx,
                vector=vector,
                payload={"text": text, "name": product["name"], "id": product["id"]},
            )
        )

    qdrant.upsert(collection_name=COLLECTION_NAME, points=points)
    print(f"Uploaded {len(points)} products to Qdrant collection '{COLLECTION_NAME}'")


def get_relevant_products(query: str, top_k: int = 4) -> str:
    """Search Qdrant for the most relevant product chunks for this query."""
    query_vector = embed_text(query)
    results = qdrant.search(
        collection_name=COLLECTION_NAME,
        query_vector=query_vector,
        limit=top_k,
    )
    context_chunks = [r.payload["text"] for r in results]
    return "\n\n".join(context_chunks)


def generate_response(query: str, context: str) -> str:
    """Generate a grounded response using OpenAI, given retrieved context."""
    system_prompt = (
        "You are the Shopsy shopping assistant. Answer customer questions "
        "using ONLY the product information provided in the context below. "
        "Be friendly, concise, and helpful. If the context doesn't contain "
        "the answer, say you don't have that information rather than "
        "guessing. Recommend specific products by name when relevant.\n\n"
        f"CONTEXT:\n{context}"
    )

    completion = client.chat.completions.create(
        model=CHAT_MODEL,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": query},
        ],
        temperature=0.4,
        max_tokens=400,
    )
    return completion.choices[0].message.content


if __name__ == "__main__":
    # Run: python services/rag_service.py  (from backend/) to seed Qdrant
    setup_collection()
