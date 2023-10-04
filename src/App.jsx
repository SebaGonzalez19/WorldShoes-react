import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
//npm start

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos/:marca" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
