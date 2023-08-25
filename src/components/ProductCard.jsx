import React from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
  const { category, title, id, image, price } = product;
  const navigate = useNavigate();
  const navigateDetail = () => navigate(`/products/${id}`);
  return (
    <li className="flex flex-col cursor-pointer" onClick={navigateDetail}>
      <img className="rounded-lg" src={image} alt={title} />
      <div className="px-2 py-1">
        <div className="flex justify-between text-sm">
          <p className="font-bold">{title}</p>
          <p>{`${price}원`}</p>
        </div>
        <p className="text-sm font-semibold">{category}</p>
      </div>
    </li>
  );
}
