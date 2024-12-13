import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { useSelector } from "react-redux";

const RelatedProducts = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="relatedproducts">
      <h1>Productos relacionados</h1>
      <hr />
      <div className="relatedproducts-item">
        {products.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
