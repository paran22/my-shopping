import React from "react";
import { useNavigate } from "react-router";
import { BsFillPencilFill } from "react-icons/bs";
import { NavIconItem, NavTextItem } from "./NavItem";
import UserInfo from "./UserInfo";
import { useAuthContext } from "../../context/AuthContext";
import { loginByGoogle, logoutByGoogle } from "../../auth/googleAuthProvider";
import CartIcon from "./CartIcon";

export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthInfoLoading, isLogin, isAdmin } = useAuthContext();
  const navigateProductsPage = () => navigate("/products");
  const navigateProductAddPage = () => navigate("/products/add");
  const addIcon = <BsFillPencilFill />;
  return (
    <>
      {!isAuthInfoLoading && (
        <div className="flex gap-2 items-center">
          <div className="hidden sm:block">
            <NavTextItem name="Products" onClick={navigateProductsPage} />
          </div>
          {isLogin && <CartIcon />}
          {isAdmin && (
            <NavIconItem icon={addIcon} onClick={navigateProductAddPage} />
          )}
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
