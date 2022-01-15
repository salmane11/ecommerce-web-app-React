import { Route, Routes } from "react-router-dom";
import AnonymousHomePage from "./pages/AnonymousHomePage";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import SigninPage from "./pages/SigninPage";
import ProductPage from "./pages/ProductPage";
import ProductsProvider from "./store/productsContext";
import UserProvider from "./store/userContext";
import UserCart from "./components/cart/UserCart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const DUMMY_CATEGORIES = [
    { name: "men" },
    { name: "Women" },
    { name: "Sport" },
    { name: "Electronics" },
    { name: "children" },
    { name: "accessories" },
    { name: "gifts" },
    { name: "Toys" },
    { name: "VideoGames" },
  ];
  //fetch categories from firebase.
  return (
    <UserProvider>
      <ProductsProvider>
        {cartIsShown && <UserCart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <Routes>
          <Route path="/" element={<AnonymousHomePage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          {DUMMY_CATEGORIES.map((category) => {
            return (
              <Route
                key={category.name}
                path={`/cathegories/${category.name}`}
                element={<CategoryPage categoryName={category.name} />}
              />
            );
          })}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
