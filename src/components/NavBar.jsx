import React from "react";
import { useNavigate } from "react-router";
import { BsCart2, BsFillPencilFill } from "react-icons/bs";

export default function NavBar() {
  const navigate = useNavigate();
  const navigateProductsPage = () => navigate("/products");
  const navigateCartsPage = () => navigate("/carts");
  const navigateProductAddPage = () => navigate("/products/add");
  const cartsIcon = <BsCart2 />;
  const addIcon = <BsFillPencilFill />;
  return (
    <div className="flex gap-2 items-center">
      <NavText name="Products" onClick={navigateProductsPage} />
      <NavItem icon={cartsIcon} onClick={navigateCartsPage} />
      <NavItem icon={addIcon} onClick={navigateProductAddPage} />
    </div>
  );
}

function NavText({ name, onClick }) {
  return (
    <div className="px-1" onClick={onClick}>
      <p className="font-semibold">{name}</p>
    </div>
  );
}

function NavItem({ icon, onClick }) {
  return (
    <div className="text-xl px-1" onClick={onClick}>
      <p>{icon}</p>
    </div>
  );
}
