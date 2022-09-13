import classes from "./Nav.module.css";
import CartButton from "./CartButton";

function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <h1>Sauna &amp; Origano</h1>
        <CartButton>Cart</CartButton>
      </div>
    </nav>
  );
}

export default Nav;
