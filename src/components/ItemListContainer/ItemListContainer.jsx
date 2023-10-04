import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import "./Style.css";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Marca");
  const marca = useParams().marca;

  useEffect(() => {
    pedirDatos().then((res) => {
      if (marca) {
        setProductos(res.filter((prod) => prod.marca === marca));
        setTitulo(marca);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [marca]);

  return (
    <div>
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
}
