import React, { useContext, useState } from "react";
import "./style.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

export default function ItemDetail({ item }) {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const agregarItemAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    setMensaje("¡Se añadió al carrito!😁");
    setTimeout(() => {
      setMensaje("");
    }, 2000);
  };

  return (
    <div className="card-detail">
      <img src={item.imagen} alt={item.modelo} className="imagen-detail" />
      <div className="info-detail">
        <h3 className="text">{item.modelo}</h3>
        <p className="text">${formatPrice(item.precio)}</p>
        <p className="text">{item.descripcion}</p>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={() => {
            agregarItemAlCarrito(item, cantidad);
          }}
        />
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </div>
  );
}
