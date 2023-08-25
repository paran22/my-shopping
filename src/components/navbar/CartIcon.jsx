import React from "react";
import { useNavigate } from "react-router";
import { NavIconItem } from "./NavItem";
import { BsCart2 } from "react-icons/bs";
import { useQuery } from "react-query";
import { getCarts } from "../../api/api";
import { useAuthContext } from "../../context/AuthContext";

export default function CartIcon() {
  const navigate = useNavigate();
  const navigateCartsPage = () => navigate("/carts");
  const cartsIcon = <BsCart2 />;
  const { user } = useAuthContext();
  const { data: carts } = useQuery(["carts"], () => getCarts(user.uid));
  return (
    <div className="relative">
      <NavIconItem icon={cartsIcon} onClick={navigateCartsPage} />
      {carts && (
        <p className="w-5 h-5 text-sm absolute bg-primary rounded-full text-center font-bold -top-1 -right-1">
          {carts.length}
        </p>
      )}
    </div>
  );
}
