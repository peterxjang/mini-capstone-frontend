import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { About } from "./About";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<ProductsIndex products={products} />} />
        <Route path="/products" element={<ProductsIndex products={products} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
