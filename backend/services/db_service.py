"""
Neon Serverless Postgres service — stores chat history.
"""

import os
import asyncpg
from datetime import datetime

DATABASE_URL = os.getenv("DATABASE_URL")

_pool: asyncpg.Pool | None = None


async def get_pool() -> asyncpg.Pool:
    global _pool
    if _pool is None:
        _pool = await asyncpg.create_pool(DATABASE_URL, ssl="require")
    return _pool


async def init_db():
    pool = await get_pool()
    async with pool.acquire() as conn:
        await conn.execute(
            """
            CREATE TABLE IF NOT EXISTS chat_history (
                id SERIAL PRIMARY KEY,
                session_id TEXT NOT NULL,
                user_message TEXT NOT NULL,
                bot_response TEXT NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
            """
        )


async def save_chat_message(session_id: str, user_message: str, bot_response: str):
    pool = await get_pool()
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO chat_history (session_id, user_message, bot_response, created_at)
            VALUES ($1, $2, $3, $4)
            """,
            session_id,
            user_message,
            bot_response,
            datetime.utcnow(),
        )


async def get_chat_history(session_id: str):
    pool = await get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            """
            SELECT user_message, bot_response, created_at
            FROM chat_history
            WHERE session_id = $1
            ORDER BY created_at ASC
            """,
            session_id,
        )
        return [dict(r) for r in rows]
