import React from "react";
import { useNavigate } from "react-router";
import { BsCart2, BsFillPencilFill } from "react-icons/bs";
import { NavIconItem, NavTextItem } from "./NavItem";
import UserInfo from "./UserInfo";
import { useUserContext } from "../../context/UserContext";
import { loginByGoogle, logoutByGoogle } from "../../auth/googleAuthProvider";

export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthInfoLoading, isLogin } = useUserContext();
  const navigateProductsPage = () => navigate("/products");
  const navigateCartsPage = () => navigate("/carts");
  const navigateProductAddPage = () => navigate("/products/add");
  const cartsIcon = <BsCart2 />;
  const addIcon = <BsFillPencilFill />;
  return (
    <>
      {!isAuthInfoLoading && (
        <div className="flex gap-2 items-center">
          <NavTextItem name="Products" onClick={navigateProductsPage} />
          <NavIconItem icon={cartsIcon} onClick={navigateCartsPage} />
          <NavIconItem icon={addIcon} onClick={navigateProductAddPage} />
          <UserInfo />
          <NavTextItem
            name={isLogin ? "Logout" : "Login"}
            onClick={isLogin ? logoutByGoogle : loginByGoogle}
          />
        </div>
      )}
    </>
  );
}
