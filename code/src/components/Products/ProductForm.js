import { useContext, useState } from "react";
import { userContext } from "../../store/userContext";
import styles from "./ProductForm.module.css";
function ProductForm(props) {
  const userctx = useContext(userContext);
  
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("L");
  const [feedback,setFeedback]=useState("");
  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(userctx.signedIn){
      userctx.addProduct(props.product,quantity,size);
      setFeedback("goood Choice !!!!");
    }else{
      setFeedback("please signIn to buy this product!!");
    }
  };
  return (
    <div className={styles.product}>
      <img src={props.product.image} alt={props.product.name} />
      <div className={styles.info}>
        <h1>{props.product.name}</h1>
        <h2>{props.product.price}</h2>
        <form onSubmit={submitHandler}>
          <div className={styles.inputs}>
            <label>Quantity : </label>
            <input
              placeholder={1}
              type="number"
              name="quantity"
              onChange={quantityHandler}
            />
            <label>Size : </label>
            <input
              placeholder="L"
              type="text"
              name="size"
              onChange={sizeHandler}
            />
          </div>
          <div className={styles.buttons}>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
          {<p>{feedback}</p>}
        </form>
        <p>{props.product.description}</p>
      </div>
    </div>
  );
}
export default ProductForm;
