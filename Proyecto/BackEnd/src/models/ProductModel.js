import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  _id: Number,
  name: String,
  category: String,
  image: String,
  new_price: Number,
});

export const ProductsModel = mongoose.model("products", productsSchema);
