import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { pedirItemPorId } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}
