import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center">
      <div className="lg:flex lg:items-center">
        <ul className="flex gap-12 items-center text-xl font-semibold">
          <li>
            <NavLink className={"hover:text-slate-500"} to="./">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-slate-500"} to="./about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-slate-500"} to="./products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-slate-500"} to="./contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-slate-500"} to="./cart">
              <FiShoppingCart className="relative text-3xl" />
              <span className="absolute top-8 right-7 bg-blue-500 p-0.5 rounded-full text-sm">
                10
              </span>
            </NavLink>
          </li>
        </ul>
        {/* ///////////////// two button for open and close /// */}
        <div className="lg:hidden">
          <IoMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          <IoClose
            className={`text-3xl cursor-pointer ${
              isMenuOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
