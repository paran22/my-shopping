import React from "react";
import Logo from "./Logo";
import NavBar from "./navbar/NavBar";

export default function Header() {
  return (
    <header className="w-full sm:w-5/6 px-1 mx-auto flex justify-between items-center py-2">
      <Logo />
      <NavBar />
    </header>
  );
}
