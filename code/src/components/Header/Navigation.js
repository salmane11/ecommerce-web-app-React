import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import LoginIcon from "@mui/icons-material/Login";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { userContext } from "../../store/userContext";

function Navigation(props) {
  const userctx = useContext(userContext);
  const logOutHandler = () => {
    userctx.logOut();
  };
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/about-us">
            AboutUs
          </NavLink>
          <PeopleIcon />
        </li>
        <li>
          <NavLink
            onClick={logOutHandler}
            className={styles.link}
            to="/sign-in"
          >
            {userctx.signedIn ? "SignOut" : "SignIn"}
          </NavLink>
          <LoginIcon />
        </li>
        {userctx.signedIn && (
          <li>
            <button className={styles.link} onClick={props.onShowCart}>
              <ShoppingCartIcon />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
