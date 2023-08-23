import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-4/5 mx-auto flex justify-between items-center">
      <Logo />
      <NavBar />
    </header>
  );
}
