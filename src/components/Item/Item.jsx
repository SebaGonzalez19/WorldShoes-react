import React from "react";
import "./style.css";

export default function Item({ producto }) {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.modelo} />
      <h2>{producto.modelo}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  );
}
