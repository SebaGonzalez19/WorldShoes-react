import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./style.css";

export default function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
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
              <p>Precio por unidad: ${prod.precio}</p>
              <p>Precio total: ${prod.precio * prod.cantidad}.000</p>
              <p>Cantidad: {prod.cantidad}</p>
            </div>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2> Precio total: ${precioTotal()}.000 </h2>
          <button className="ver-mas" onClick={handleVaciar}>
            Vaciar
          </button>
        </>
      ) : (
        <h2>El carrito esta vacio 😢</h2>
      )}
    </div>
  );
}
