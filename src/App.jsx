import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Carrito from "./components/Carrito/Carrito";
import CartProvider from "./components/Context/CartContext";
import Checkout from "./components/Checkout/Checkout";
//npm start

function App() {
  return (
    <div className="App">
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:marca" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
