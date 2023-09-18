import React from "react";
import cartImage from "../../assets/images/cart.svg";
import "./style.css";

export default function CartWidget() {
  return (
    <div>
      <img src={cartImage} alt="cart-widget" className="cart" />
      <span>0</span>
    </div>
  );
}
