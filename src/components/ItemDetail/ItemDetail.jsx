import React, { useState } from "react";
import "./style.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    console.log({ ...item, cantidad });
  };

  return (
    <div className="card-detail">
      <img src={item.imagen} alt={item.modelo} className="imagen-detail" />
      <div className="info-detail">
        <h3 className="text">{item.modelo}</h3>
        <p className="text">${item.precio}</p>
        <p className="text">{item.descripcion}</p>
        <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar} />
      </div>
    </div>
  );
}
