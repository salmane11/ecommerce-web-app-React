import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/Products/ProductForm";
import ProductList from "../components/Products/ProductList";
import { productsContext } from "../store/productsContext";

function ProductPage() {
  const productsctx = useContext(productsContext);

  const { id } = useParams("id");

  return (
    <React.Fragment>
      <ProductForm product={productsctx.getProductById(id)} />
      <ProductList category={productsctx.getProductById(id).category} title="similar products" />
    </React.Fragment>
  );
}
export default ProductPage;
