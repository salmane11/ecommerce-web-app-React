import React from "react";
import { useState } from "react";

export const userContext = React.createContext({
  userName: "",
  signedIn: false,
  userCart: [],
  logIn: (userName) => {},
  logOut: () => {},
  addProduct: (product) => {},
});

function UserProvider(props) {
  const [userName, setUserName] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const loginHandler = (userName) => {
    setUserName(userName);
    setSignedIn(true);
  };
  const logOutHandler = () => {
    setUserName("");
    setSignedIn(false);
    setUserCart([]);
  };

  const addProduct = (product, quantity, size) => {
    setUserCart((state) => [
      ...state,
      { product: product, quantity: quantity, size: size },
    ]);
    console.log(userCart);
  };

  return (
    <userContext.Provider
      value={{
        userName,
        signedIn,
        userCart,
        logIn: loginHandler,
        logOut: logOutHandler,
        addProduct,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
export default UserProvider;
