import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//npm start

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos a WorldShoes!"} />
    </div>
  );
}

export default App;
