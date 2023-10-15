import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./Style.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const { marca } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = marca ? query(productosRef, where("marca", "==", marca)) : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      );
    });

    if (marca) {
      setTitulo(`Productos de ${marca}`);
    } else {
      setTitulo("Productos");
    }
  }, [marca]);

  return (
    <div>
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
}
