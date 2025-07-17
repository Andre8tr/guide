import React from "react";
import Image from "next/image";
import logobar from "../assets/img/logobar.png";

const menuItems = [
  { name: "Home", icon: "🏠" },
  { name: "Table Orders", icon: "📝" },
  { name: "Clients", icon: "👥" },
  { name: "Inventory", icon: "📦" },
  { name: "Config", icon: "⚙️" },
];

export default function SideBar() {
  return (
    <aside className="h-screen w-56 bg-gray-800 text-white flex flex-col py-8">
      <Image src={logobar} alt="Logo" className="w-32 h-32 mx-auto mb-4" />
      <nav className="flex flex-col gap-4 justify-center">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
