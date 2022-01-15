import { useContext, useState } from "react";
import { productsContext } from "../../store/productsContext";
import styles from "./Search.module.css";

function Search() {
  const productsctx=useContext(productsContext);
  const products=productsctx.products;
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const searchBarHandler = (event) => {
    setSearchedItem(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(searchedItem);
    setFilteredProducts(products.filter(product=>product.name.includes(searchedItem)));
    console.log(filteredProducts);
  };
  return (
    <form className={styles.searchbar} onSubmit={submitHandler}>
      <input
        placeholder="  search ..."
        value={searchedItem}
        type="text"
        onChange={searchBarHandler}
      />
    </form>
  );
}
export default Search;
