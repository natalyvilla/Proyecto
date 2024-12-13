import { ProductsModel } from "../models/ProductModel.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find().sort({ _id: -1 }));

export const createProduct = async (req, res) => {
  const newProduct = await ProductsModel.create(req.body);
  res.send(newProduct);
};

export const updateProduct = async (req, res) => {
  const _id = req.params.id;
  const { name, category, image, new_price } = req.body;

  const product = {
    _id,
    name,
    category,
    image,
    new_price,
  };

  const resultado = await ProductsModel.updateOne(
    { _id: _id },
    { $set: product }
  );

  res.send(resultado);
};

export const deleteProduct = async (req, res) => {
  const result = await ProductsModel.deleteOne({ _id: req.params.id });
  res.send(result);
};
