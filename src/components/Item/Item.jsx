import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  const formatPrice = (price) => {
    return price.toLocaleString();
  };
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.modelo} />
      <h2>{producto.modelo}</h2>
      <p>${formatPrice(producto.precio)}</p>
      <p>{producto.descripcion}</p>
      <div className="button-container">
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
