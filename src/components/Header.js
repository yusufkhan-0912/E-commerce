import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-300 p-12">
      <NavLink to="./">
        <img class="w-44" src="/logo.png" alt="logo" />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
