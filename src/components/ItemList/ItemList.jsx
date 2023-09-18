import React from "react";
import "./style.css";
import Item from "../Item/Item";

export default function ItemList({ productos }) {
  return (
    <div className="container">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
  );
}
