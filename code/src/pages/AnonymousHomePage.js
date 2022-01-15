import React from "react";
import styles from "./Page.module.css";
import Menu from "../components/menu/Menu";
import ProductList from "../components/Products/ProductList";

function AnonymousHomePage() {
  return (
    <div className={styles.home}>
      <Menu />
      <div className={styles.list}>
        <ProductList title="best sellers" />
        <ProductList title="recommended for you" />
        <ProductList title="similar products" />
      </div>
    </div>
  );
}
export default AnonymousHomePage;
