import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BsCart2, BsFillPencilFill } from "react-icons/bs";
import {
  loginByGoogle,
  logoutByGoogle,
  onUserStateChange,
} from "../auth/googleAuthProvider";

export default function NavBar() {
  const [user, setUser] = useState(undefined);
  console.log(user);
  useEffect(() => onUserStateChange(setUser), []);

  const navigate = useNavigate();
  const navigateProductsPage = () => navigate("/products");
  const navigateCartsPage = () => navigate("/carts");
  const navigateProductAddPage = () => navigate("/products/add");
  const cartsIcon = <BsCart2 />;
  const addIcon = <BsFillPencilFill />;
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
    <div className="flex gap-2 items-center">
      <NavText name="Products" onClick={navigateProductsPage} />
      <NavItem icon={cartsIcon} onClick={navigateCartsPage} />
      <NavItem icon={addIcon} onClick={navigateProductAddPage} />
      <div className={user === undefined ? "invisible" : "visible"}>
        <NavText
          name={isLogin ? "Logout" : "Login"}
          onClick={isLogin ? logout : login}
        />
      </div>
    </div>
  );
}

function NavText({ name, onClick }) {
  return (
    <div className="px-1 cursor-pointer" onClick={onClick}>
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
