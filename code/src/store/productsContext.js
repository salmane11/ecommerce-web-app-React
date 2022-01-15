import React from "react";
export const productsContext = React.createContext({
  products: [],
  getProductById: (id) => {},
});

function ProductsProvider(props) {
  const products = [
    {
      category: "Women",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 0,
      image: require("../images/fsmoking.jfif"),
      name: "female smoking",
      price: "$20",
    },
    {
      category: "Electronics",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 1,
      image: require("../images/pc.jfif"),
      name: "mac book pro",
      price: "$100",
    },
    {
      category: "men",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 2,
      image: require("../images/shoes.jfif"),
      name: "shoes",
      price: "$240",
    },
    {
      category: "Electronics",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 3,
      image: require("../images/phone.jfif"),
      name: "phone",
      price: "$26",
    },
    {
      category: "Electronics",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 4,
      image: require("../images/phone2.jfif"),
      name: "phone",
      price: "$25",
    },
    {
      category: "Electronics",
      description:
        "The shoe has a first level of comfort to start jogging.Very light shoe: 180g in size 43. The difference in sole height between the rear and the front is 10 mm.",
      id: 5,
      image: require("../images/pc2.jfif"),
      name: "dell i7 10th",
      price: "$25",
    },
  ];

  const getProductById = (id) => {
    if (products.filter((product) => product.id === +id).length > 0) {
      return products.filter((product) => product.id === +id)[0];
    }
  };
  return (
    <productsContext.Provider value={{ products, getProductById }}>
      {props.children}
    </productsContext.Provider>
  );
}
export default ProductsProvider;
