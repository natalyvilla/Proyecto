import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useSelector } from "react-redux";

const CartItems = () => {
  const { getTotalCartAmount,cartItems, removeFromCart } =
    useContext(ShopContext);
  const { products } = useSelector((state) => state.products);

  const formatToCOP = (value) => {
    return value.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Titulo</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e._id] > 0) {
          return (
            <div key={e._id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{formatToCOP(e.new_price)}</p>
                <button className="cartitems-quantity">
                  {cartItems[e._id]}
                </button>
                <p>{formatToCOP(e.new_price * cartItems[e._id])}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e._id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total del carrito</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{formatToCOP(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Tarifa de envío</p>
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{formatToCOP(getTotalCartAmount())}</h3>
            </div>
          </div>
          <button>Procesar pago</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
