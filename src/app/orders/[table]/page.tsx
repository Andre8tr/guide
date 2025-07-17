"use client";
import { useParams } from "next/navigation";

export default function TableOrderPage() {
  const params = useParams();
  const table = params.table;

  return (
    <div>
      <h1>Orden de la Mesa {table}</h1>
      {/* Add your table-specific content here */}
    </div>
  );
}
