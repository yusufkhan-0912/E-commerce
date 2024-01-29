import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const Errorpage = () => {
  return (
    <div className="my-9">
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-8xl">404</h2>
          <h3 className="text-5xl">UH! OH! You're lost.</h3>
          <p className="text-xl">
            The page you are looking for does not exist.Click on the below
            button to go back to the homepage
          </p>

          <NavLink to="/">
            <button className="bg-blue-700 text-white rounded-lg py-4 px-8 border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96">
              GO BACK TO HOMEPAGE
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
