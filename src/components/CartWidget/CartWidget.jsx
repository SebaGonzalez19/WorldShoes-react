import React, { useContext } from "react";
import cartIcon from "../../assets/images/cartIcon.png";
import "./Style.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export default function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="nav-link" to="/carrito">
        {/* Carrito */}
        <img src={cartIcon} alt="cart-widget" className="cart" />
        <span className="numero"> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}
