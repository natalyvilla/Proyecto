import { combineReducers } from "redux";
import productsSlice from "./slices/productsSlice";

const reducer = combineReducers({
  products: productsSlice,
});

export default reducer;
