import dbConnect from "@/lib/mongodb";
import Inventory from "@/models/Inventory";

export async function GET() {
  await dbConnect();
  const items = await Inventory.find();
  return Response.json(items);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const item = await Inventory.create(data);
  return Response.json(item);
}
