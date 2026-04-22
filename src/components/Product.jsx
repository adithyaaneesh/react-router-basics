import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {

  const { id } = useParams();

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];

  const product = products.find(p => p.id === Number(id));

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <h2>{product.name}</h2>
      ) : (
        <h2>Product Not Found</h2>
      )}

    </div>
  );
};

export default Product;