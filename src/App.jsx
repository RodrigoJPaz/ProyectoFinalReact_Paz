import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CartContext from "./context/CartContext";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          {/* Componente NavBar que incluye componente CardWidget */}
          <NavBar />

          <Routes>
            {/* Aca se encuentran todas las rutas de la page y sus componentes*/}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/store" element={<ItemListContainer greeting="Computer Technology" />} />
            <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  );
};

export default App;
