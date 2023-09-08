import React from "react";
import cart from "./assets/cart.svg";
import "./Style.css";

export default function CartWidget() {
  return (
    <div>
      <img src={cart} alt="cart-widget" className="cart" />0
    </div>
  );
}
