import "./App.css";
import Nav from "./Components/Layout/Nav";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Modal from "./Components/UI/Modal";
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
      {modalIsVisible && <Modal onHideModal={hideModal} />}
      <Nav onShowModal={showModal} />
      <Header />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
