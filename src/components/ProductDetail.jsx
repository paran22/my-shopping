import React, { useState } from "react";
import { useLocation } from "react-router";
import { addToCarts } from "../api/api";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;
  const { id, title, description, price, image, options } = product;
  const [selected, setSelected] = useState(options && options[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [resultMsg, setResultMsg] = useState();
  const selectOption = (e) => setSelected(e.target.value);
  const addCarts = async () => {
    setIsUploading(true);
    const success = addToCarts(product, selected);
    const resultMsg = success
      ? "장바구니에 담겼습니다."
      : "에러가 발생했습니다.";
    setResultMsg(resultMsg);
    setTimeout(() => setResultMsg(null), 2000);
  };
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
        {resultMsg && <p>{resultMsg}</p>}
        <button
          onClick={addCarts}
          className="py-2 px-2 border my-2"
          disabled={isUploading}
        >
          장바구니 담기
        </button>
      </section>
    </section>
  );
}
