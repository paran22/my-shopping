import React, { useState } from "react";
import AddProductForm from "../components/AddProductForm";

export default function ProductAddPage() {
  const [product, setProduct] = useState();
  // const { imgUrl } = product;
  return (
    <div>
      <AddProductForm />
    </div>
  );
}
