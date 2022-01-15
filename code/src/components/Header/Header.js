import styles from "./Header.module.css";
import Search from "./Search";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Search />
      <Navigation onShowCart={props.onShowCart}/>
    </div>
  );
}
export default Header;
