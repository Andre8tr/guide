import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, default: 0 },
});

export default mongoose.models.Inventory ||
  mongoose.model("Inventory", InventorySchema);
