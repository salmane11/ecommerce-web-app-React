import { useNavigate } from "react-router-dom";
import ProductCard from "../../ui/ProductCard";

function Product(props) {
  const navigate=useNavigate();
  const selectProductHandler=()=>{
    navigate(`/products/${props.product.id}`);
  }
  return (
    <ProductCard onClick={selectProductHandler}>
      <h3>{props.product.name}</h3>
      <img src={props.product.image} alt={props.product.name}/>
    </ProductCard>
  );
}
export default Product;
