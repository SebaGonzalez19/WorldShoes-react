import React, { useEffect } from "react";

export default function Nosotros() {
  useEffect(() => {
    const clickear = () => {
      console.log("Se hizo un click en la window");
    };

    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return <div>Nosotros somos re locos</div>;
}
