import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProducts from "../../API/getProducts";
import createProductService from "../../API/createProduct";
import updateProductService from "../../API/updateProduct";
import deleteProductService from "../../API/deleteProduct";

const initialState = {
  loading: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      createProductService(action.payload);
      state.loading = "idle";
    },
    uptadeProduct: (state, action) => {
      const { _id } = action.payload;
      updateProductService(_id, action.payload);
      state.loading = "idle";
    },
    deleteProduct: (state, action) => {
      deleteProductService(action.payload);
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "getProducts",
  async () => await getProducts()
);

export default productSlice.reducer;
export const { createProduct, uptadeProduct, deleteProduct } =
  productSlice.actions;
