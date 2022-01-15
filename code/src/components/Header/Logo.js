import {useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  const navigate=useNavigate();
  const goHomeHandler=()=>{
    navigate("/")
  }
  return (
    <div className={styles.image}>
      <img onClick={goHomeHandler} src={require("../../images/logo.png")} alt="logo" />
      <h2>MYSHOP</h2>
    </div>
  );
}
export default Logo;
