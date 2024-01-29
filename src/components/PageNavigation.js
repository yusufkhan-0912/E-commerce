import React from "react";
import { NavLink } from "react-router-dom";

let PageNavigation = ({ title }) => {
  return (
    <>
      <div className="wrapper h-20 flex justify-start items-start text-4xl pl-5 bg-slate-100 pt-4">
        <NavLink className="text-green-600" to="/">
          Home
        </NavLink>
        /{title}
      </div>
    </>
  );
};

export default PageNavigation;
