import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function ProductList() {
  const { getProducts: { data: products } } = useProducts();
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
