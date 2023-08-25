import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addAndUpdateCarts, removeFromCart } from "../api/api";
import { useAuthContext } from "../context/AuthContext";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function Cart({ cart }) {
  const { user } = useAuthContext();
  const { selectedOption, product, count } = cart;
  const { image, title, price } = product;
  const minusCount = () => {
    if (count < 2) return;
    addAndUpdateCarts(product, selectedOption, user.uid, count - 1);
  };
  const plusCount = () =>
    addAndUpdateCarts(product, selectedOption, user.uid, count + 1);
  const deleteItem = () => removeFromCart(product.id, user.uid);
  return (
    <li className="flex h-40 gap-3">
      <img className="object-contain h-40" src={image} alt={title} />
      <div className="flex flex-col flex-1">
        <p>{title}</p>
        <p>{selectedOption}</p>
        <p>{`${price}원`}</p>
        <p>{count}</p>
      </div>
      <div className="flex gap-1 items-center">
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={minusCount} />
        <span>{count}</span>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={plusCount} />
        <RiDeleteBin5Fill className={ICON_CLASS} onClick={deleteItem} />
      </div>
    </li>
  );
}
