import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function Checkout() {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit, reset } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });

    reset();
  };

  if (pedidoId) {
    return (
      <div className="container-contact">
        <h1 className="title">Muchas gracias por tu compra! 😊</h1>
        <p>Tu numero de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="container-contact">
      <h1 className="title"> Finzalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("Email")} />
        <input type="phone" placeholder="Ingresá tu celular" {...register("celular")} />
        <button type="submit" className="enviar">
          Comprar
        </button>
      </form>
    </div>
  );
}
