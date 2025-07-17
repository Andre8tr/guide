import React from "react";
import Link from "next/link";

export default function OrdersPage() {
  const pendingOrders = ["fdsf", "dfds"];
  const numTables = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-bold">Orders Page</h1>
      <p>
        Ordenes pendientes de atender{" "}
        <span className="text-red-500">{pendingOrders.length}</span>
      </p>

      <div className="flex-1 grid grid-cols-3 gap-2 items-center justify-center">
        {numTables.map((table) => (
          <Link key={table} href={`/orders/${table}`} className="no-underline">
            <div className="min-h-[150px] min-w-[350px] p-4 border rounded bg-red-500 text-white text-center flex items-center justify-center">
              <h2 className="text-lg font-semibold">Mesa {table}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
