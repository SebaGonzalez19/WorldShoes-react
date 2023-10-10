import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function Contacto() {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="title"> Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("Email")} />
        <input type="phone" placeholder="Ingresá tu celular" {...register("celular")} />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
}
