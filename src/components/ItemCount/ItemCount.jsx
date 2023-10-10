import React from "react";
import "./style.css";

export default function ItemCount({ cantidad, handleRestar, handleSumar, handleAgregar }) {
  return (
    <div className="count">
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-carrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
}
