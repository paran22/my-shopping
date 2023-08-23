import React from "react";
import { useNavigate } from "react-router";
import { BsCart2, BsFillPencilFill } from "react-icons/bs";
import { NavIconItem, NavTextItem } from "./NavItem";
import LoginButton from "./LoginButton";

export default function NavBar() {
  const navigate = useNavigate();
  const navigateProductsPage = () => navigate("/products");
  const navigateCartsPage = () => navigate("/carts");
  const navigateProductAddPage = () => navigate("/products/add");
  const cartsIcon = <BsCart2 />;
  const addIcon = <BsFillPencilFill />;
  return (
    <div className="flex gap-2 items-center">
      <NavTextItem name="Products" onClick={navigateProductsPage} />
      <NavIconItem icon={cartsIcon} onClick={navigateCartsPage} />
      <NavIconItem icon={addIcon} onClick={navigateProductAddPage} />
      <LoginButton />
    </div>
  );
}
