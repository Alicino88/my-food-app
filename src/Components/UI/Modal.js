import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideModal} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      <Backdrop onHideModal={props.onHideModal} />
      <ModalOverlay onHideModal={props.onHideModal}>
        {props.children}
      </ModalOverlay>
    </>
  );
}

export default Modal;
