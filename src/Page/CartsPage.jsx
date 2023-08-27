import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import { useQuery } from "react-query";
import { getCarts } from "../api/api";
import Cart from "../components/Cart";
import PriceCard from "../components/PriceCard";
import { useAuthContext } from "../context/AuthContext";

const SHIPPING = 3000;

export default function CartsPage() {
  const { user } = useAuthContext();
  const { isLoading, data: carts } = useQuery(["carts"], () =>
    getCarts(user.uid)
  );
  const hasCarts = carts && carts.length > 0;
  const totalPrice =
    hasCarts &&
    carts.reduce(
      (prev, current) => prev + parseInt(current.product.price) * current.count,
      0
    );
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="flex flex-col w-4/5 mx-auto items-stretch">
      <p className="border-b py-4 mb-4 font-bold text-center">내 장바구니</p>
      {!hasCarts && <p>장바구니에 상품이 없습니다.</p>}
      <ul className="flex flex-col gap-3 py-2 border-b">
        {hasCarts && carts.map((cart) => <Cart key={cart.id} cart={cart} />)}
      </ul>
      <div className="flex justify-between items-center">
        <PriceCard text="상품 총액" price={totalPrice} />
        <BsFillPlusCircleFill className="shrink-0" />
        <PriceCard text="배송액" price={SHIPPING} />
        <FaEquals className="shrink-0" />
        <PriceCard text="총액" price={SHIPPING + totalPrice} />
      </div>
    </section>
  );
}
