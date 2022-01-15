import Card from "../../ui/Card";
import styles from './ProductCart.module.css';
function ProductCart(props) {
  return (
    <Card className={styles.productcart}>
      <img src={props.product.image} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <h4>x{props.quantity}</h4>
      <h4>size:{props.size}</h4>
    </Card>
  );
}
export default ProductCart;
