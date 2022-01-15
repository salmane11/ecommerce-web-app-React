import ProductList from "../components/Products/ProductList";
import Menu from "../components/menu/Menu";
import styles from "./Page.module.css";

function CategoryPage(props) {
  //fetch productLists by props.categoryName
  return (
    <div className={styles.home}>
      <Menu />
      <div className={styles.list}>
        <h2>{props.categoryName}</h2>
        <ProductList category={props.categoryName} title="best sellers" />
        <ProductList
          category={props.categoryName}
          title="Recommended for you"
        />
        <ProductList category={props.categoryName} title="similar products" />
      </div>
    </div>
  );
}
export default CategoryPage;
