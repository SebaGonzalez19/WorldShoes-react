import React from "react";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav>
      <h3>World Shoes</h3>
      <div>
        <button>Nike</button>
        <button>Adidas</button>
        <button>Puma</button>
      </div>
      <CartWidget />
    </nav>
  );
}
