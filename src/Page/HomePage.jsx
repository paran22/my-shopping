import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function HomePage() {
  return (
    <section className="py-4 px-6">
      <Banner />
      <ProductList />
    </section>
  );
}
