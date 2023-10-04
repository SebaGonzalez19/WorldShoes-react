import React from "react";

export default function ItemDetail({ item }) {
  return (
    <div>
      <div>
        <img src={item.imagen} alt={item.modelo} />
        <div>
          <h3>{item.modelo}</h3>
          <p>${item.precio}</p>
          <p>{item.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
