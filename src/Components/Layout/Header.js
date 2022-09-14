import picture from "../../Assets/salad.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src={picture} alt="Mediterranean salad" />
      <h2>Delicious mediterranean food made in Finland</h2>
    </header>
  );
}

export default Header;
