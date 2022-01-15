import { Link } from "react-router-dom";
import styles from "./Category.module.css";
function Category(props) {
  return (
    <div className={styles.category}>
      <props.Icon />
      <Link to={`/cathegories/${props.name}`} className={styles.lien}>
        {props.name}
      </Link>
    </div>
  );
}
export default Category;
