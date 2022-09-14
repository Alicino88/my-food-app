import "./App.css";
import Nav from "./Components/Layout/Nav";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Modal from "./Components/UI/Modal";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      {modalIsVisible && <Modal onHideModal={hideModal} />}
      <Nav onShowModal={showModal} />
      <Header />
      <AvailableMeals />
    </>
  );
}

export default App;
