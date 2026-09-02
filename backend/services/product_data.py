"""
Product data used to seed the Qdrant vector database.
Keep this in sync with lib/products.ts on the frontend.
"""

PRODUCTS = [
    {
        "id": "wireless-headphones",
        "name": "Wireless Noise-Cancelling Headphones",
        "category": "Electronics",
        "price": 89.99,
        "description": "Over-ear headphones with active noise cancellation and 30-hour battery.",
        "longDescription": "Experience immersive sound with these wireless over-ear headphones. Active noise cancellation blocks out the world, while a 30-hour battery life keeps the music going all week. Includes a foldable design and carrying case, perfect for travel or daily commutes.",
    },
    {
        "id": "smart-watch",
        "name": "Fitness Smart Watch",
        "category": "Electronics",
        "price": 129.00,
        "description": "Track heart rate, steps, and sleep with a 7-day battery life.",
        "longDescription": "This smart watch tracks your heart rate, step count, sleep quality, and over 20 workout modes. Water-resistant up to 50m, with a vibrant AMOLED display and 7-day battery life. Syncs seamlessly with iOS and Android.",
    },
    {
        "id": "leather-backpack",
        "name": "Classic Leather Backpack",
        "category": "Fashion",
        "price": 74.50,
        "description": "Handcrafted genuine leather backpack with laptop compartment.",
        "longDescription": "A timeless leather backpack crafted from full-grain leather, featuring a padded 15-inch laptop compartment, multiple interior pockets, and adjustable straps. Ages beautifully over time — perfect for work, travel, or everyday use.",
    },
    {
        "id": "running-shoes",
        "name": "Lightweight Running Shoes",
        "category": "Fashion",
        "price": 59.99,
        "description": "Breathable mesh running shoes with responsive cushioning.",
        "longDescription": "Designed for runners of all levels, these shoes feature a breathable mesh upper, responsive foam cushioning, and a durable rubber outsole for grip on any terrain. Lightweight construction reduces fatigue on long runs.",
    },
    {
        "id": "coffee-maker",
        "name": "Programmable Coffee Maker",
        "category": "Home",
        "price": 45.00,
        "description": "12-cup programmable coffee maker with auto shut-off.",
        "longDescription": "Wake up to freshly brewed coffee with this 12-cup programmable coffee maker. Features a 24-hour brew delay, auto shut-off for safety, and a reusable filter. Sleek stainless steel design fits any kitchen.",
    },
    {
        "id": "yoga-mat",
        "name": "Non-Slip Yoga Mat",
        "category": "Sports",
        "price": 24.99,
        "description": "Extra-thick eco-friendly yoga mat with carrying strap.",
        "longDescription": "Made from eco-friendly TPE material, this yoga mat offers superior grip and cushioning for yoga, pilates, or general fitness. Includes a carrying strap for easy transport. Available in multiple colors.",
    },
    {
        "id": "desk-lamp",
        "name": "LED Desk Lamp",
        "category": "Home",
        "price": 32.00,
        "description": "Adjustable LED desk lamp with 5 brightness levels and USB port.",
        "longDescription": "This adjustable LED desk lamp offers 5 brightness levels and 3 color temperatures to suit any task. Features a built-in USB charging port and touch-sensitive controls. Foldable design saves desk space.",
    },
    {
        "id": "sunglasses",
        "name": "Polarized Sunglasses",
        "category": "Fashion",
        "price": 39.99,
        "description": "UV400 polarized sunglasses with lightweight frame.",
        "longDescription": "Protect your eyes in style with these polarized sunglasses offering 100% UV400 protection. The lightweight, durable frame is comfortable for all-day wear, with anti-glare polarized lenses ideal for driving and outdoor activities.",
    },
    {
        "id": "blender",
        "name": "High-Speed Blender",
        "category": "Home",
        "price": 68.00,
        "description": "1000W blender for smoothies, soups, and more.",
        "longDescription": "This powerful 1000W blender crushes ice, fruits, and vegetables with ease. Six pre-programmed settings make smoothies, soups, and sauces effortless. Includes a BPA-free 64oz pitcher and dishwasher-safe parts.",
    },
]
