import React, { useEffect, useState } from "react";
import pedirProductos from "./PedirProductos";
import "./style.css";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <h1>Nuestras zapatillas</h1>
      <ItemList productos={productos} />
    </div>
  );
}
