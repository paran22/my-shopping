import React, { useState } from "react";
import { useLocation } from "react-router";

export default function ProductDetail({ product }) {
  const location = useLocation();
  const { id, title, description, price, image, options } =
    location.state.product;
  const [selected, setSelected] = useState(options && options[0]);
  const selectOption = (e) => setSelected(e.target.value);
  return (
    <section className="flex flex-col sm:flex-row gap-4 w-full sm:w-4/5 mx-auto items-center sm:items-start">
      <img className="w-1/2" src={image} alt={description} />
      <section className="">
        <p className="font-bold">{title}</p>
        <p className="border-b font-semibold mb-1 opacity-70">{`${price}원`}</p>
        <p className="text-sm">{description}</p>
        <select className="block" onChange={selectOption} value={selected}>
          {options &&
            options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
        </select>
        <button className="py-2 px-2 border my-2">장바구니 담기</button>
      </section>
    </section>
  );
}
