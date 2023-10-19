import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./style.css";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <div className="card-container">
      {" "}
      <h1>Carrito</h1>{" "}
      {carrito.map((prod) => (
        <div className="carrito-card" key={prod.id}>
          <div className="carrito-card-content">
            <img src={prod.imagen} alt={prod.modelo} />
            <div className="carrito-card-details">
              <h2>{prod.modelo}</h2>
              <p>Precio por unidad: ${formatPrice(prod.precio)}</p>
              <p>Cantidad: {prod.cantidad} unidades</p>
              <p>Precio total: ${formatPrice(prod.precio * prod.cantidad)}</p>
            </div>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2> Precio total: ${formatPrice(precioTotal())} </h2>
          <button className="ver-mas" onClick={handleVaciar}>
            Vaciar
          </button>
          <Link className="ver-mas" to="/checkout">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>El carrito esta vacio! 😢</h2>
      )}
    </div>
  );
}
