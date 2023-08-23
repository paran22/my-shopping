import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-5/6 mx-auto flex justify-between items-center py-2">
      <Logo />
      <NavBar />
    </header>
  );
}
