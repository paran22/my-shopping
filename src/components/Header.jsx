import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-4/5 mx-auto flex justify-between">
      <Logo />
    </header>
  );
}
