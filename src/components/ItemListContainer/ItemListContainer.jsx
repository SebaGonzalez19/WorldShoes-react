import React, { useEffect, useState } from "react";
import pedirProductos from "./PedirProductos";
import ItemList from "../ItemList/ItemList";
import "./Style.css";

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
