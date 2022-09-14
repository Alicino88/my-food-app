import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideModal} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>test modal</div>
      <button onClick={props.onHideModal}>Close</button>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      <Backdrop onHideModal={props.onHideModal} />
      <ModalOverlay onHideModal={props.onHideModal} />
    </>
  );
}

export default Modal;
