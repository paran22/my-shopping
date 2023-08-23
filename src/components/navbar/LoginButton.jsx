import React from "react";
import { useUserContext } from "../../context/UserContext";
import { NavTextItem } from "./NavItem";

export default function LoginButton() {
  const { isLogin, login, logout, isAuthInfoLoading } = useUserContext();
  return (
    <div className={isAuthInfoLoading ? "invisible" : "visible"}>
      <NavTextItem
        name={isLogin ? "Logout" : "Login"}
        onClick={isLogin ? logout : login}
      />
    </div>
  );
}
