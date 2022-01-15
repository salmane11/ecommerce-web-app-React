import Product from "./Product";
import styles from "./ProductList.module.css";
import { productsContext } from "../../store/productsContext";
import { useContext, } from "react";
function ProductList(props) {
  const productsCtx = useContext(productsContext);
  const products = productsCtx.products;

  const filteredProducts = props.category
    ? products.filter((product) => product.category === props.category)
    : products;
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <div className={styles.products}>
        {filteredProducts
          .slice(0, filteredProducts.length >= 5 ? 5 : filteredProducts.length)
          .map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
export default ProductList;
