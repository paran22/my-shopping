import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center text-primary gap-1">
        <AiOutlineShop className="text-4xl" />
        <p className="text-2xl">Shoppy</p>
      </div>
    </Link>
  );
}
