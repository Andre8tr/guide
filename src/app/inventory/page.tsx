"use client";
import React, { useEffect, useState } from "react";

interface InventoryItem {
  _id: string;
  name: string;
  stock: number;
}

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);

  // Fetch inventory items
  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  // Add new item
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/inventory", {
      method: "POST",
      body: JSON.stringify({ name, stock }),
      headers: { "Content-Type": "application/json" },
    });
    const newItem = await res.json();
    setItems((prev) => [...prev, newItem]);
    setName("");
    setStock(0);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="border px-2 py-1"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Item
        </button>
      </form>
      <ul>
        {items.map((item: InventoryItem) => (
          <li key={item._id} className="mb-2">
            <span className="font-semibold">{item.name}</span> — Stock:{" "}
            {item.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
