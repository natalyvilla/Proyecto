import React, { useEffect } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";

const ShopCategory = (props) => {
  //Redux
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
      </div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item._id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price || 120000}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
