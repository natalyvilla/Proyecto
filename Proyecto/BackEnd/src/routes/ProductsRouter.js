import { Router } from "express";
import {
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProduct", createProduct);
productsRouter.put("/updateProduct/:id", updateProduct);
productsRouter.delete("/deleteProduct/:id", deleteProduct);

export default productsRouter;
