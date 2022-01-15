import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
function Footer() {
  return (
    <div className={styles.myfooter}>
      <address className={styles.firstaddress}>
        email : myshop@gmail.com
        <br />
        phone : 0612131415
        <br />
        address : Alirfane, Rabat, Rabat-Salé-Kenitra
      </address>
      <address className={styles.secondaddress}>
        Facebook : MyShop_Facebook
        <br />
        Instagram : MyShop_Instagram
        <br />
        Youtube : MyShop_Channel
      </address>
      <div className={styles.contact}>
        <ContactMailOutlinedIcon />
        <Link to="/contact" className={styles.link}>
          Contact us
        </Link>
      </div>
      <div className={styles.image}>
        <img src={require("../../images/logo.png")} alt="logo" />
      </div>
    </div>
  );
}
export default Footer;
