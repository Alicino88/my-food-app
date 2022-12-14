import classes from "./Nav.module.css";
import CartButton from "./CartButton";

function Nav(props) {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <h1>Sauna &amp; Origano</h1>
        <CartButton onShowModal={props.onShowModal}>Cart</CartButton>
      </div>
    </nav>
  );
}

export default Nav;
