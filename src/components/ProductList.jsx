import React from "react";
import { getProducts } from "../api/api";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data: products } = useQuery(["products"], getProducts);

  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
}