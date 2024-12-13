import express from "express";
import cors from "cors";
import productsRouter from "./routes/ProductsRouter.js";
import getConection from "./config/getConection.js";

const app = express();
const PORT = 2500;

getConection();

app.use(cors());
app.use(express.json());
app.use("/", productsRouter);

app.listen(PORT, () => console.log("Escuchando el puerto", PORT));
