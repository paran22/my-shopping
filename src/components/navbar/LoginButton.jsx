import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  loginByGoogle,
  logoutByGoogle,
  onUserStateChange,
} from "../../auth/googleAuthProvider";
import { NavTextItem } from "./NavItem";

export default function LoginButton() {
  const [user, setUser] = useState(undefined);
  useEffect(() => onUserStateChange(setUser), []);
  const isLogin = user !== null;

  const login = async () => {
    const user = await loginByGoogle();
    setUser(user);
  };
  const logout = async () => {
    const result = await logoutByGoogle();
    setUser(result);
  };
  return (
    <div className={user === undefined ? "invisible" : "visible"}>
      <NavTextItem
        name={isLogin ? "Logout" : "Login"}
        onClick={isLogin ? logout : login}
      />
    </div>
  );
}
