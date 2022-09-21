import "./App.css";
import Nav from "./Components/Layout/Nav";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalIsVisible(false);
  };
  return (
    <CartProvider>
      {modalIsVisible && <Cart onHideModal={hideModal} />}
      <Nav onShowModal={showModal} />
      <Header />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
