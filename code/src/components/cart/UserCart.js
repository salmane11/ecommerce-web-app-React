import { useContext } from "react";
import { userContext } from "../../store/userContext";
import Card from "../../ui/Card";
import Modal from "../../ui/Modal";
import ProductCart from "./ProductCart";
import styles from "./UserCart.module.css";

function UserCart(props) {
  const usrctx = useContext(userContext);
  console.log(usrctx.userCart);
  return (
    <Modal onClose={props.onClose}>
      <Card className={styles.usrcart}>
        <h1>MyCart</h1>
        {usrctx.userCart.map((element) => {
          return (
            <ProductCart
              key={element.product.id}
              product={element.product}
              quantity={element.quantity}
              size={element.size}
            />
          );
        })}
        <button>Validate</button>
      </Card>
    </Modal>
  );
}
export default UserCart;
