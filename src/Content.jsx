import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);
  const handleIndexProducts = () => {
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </div>
  );
}
