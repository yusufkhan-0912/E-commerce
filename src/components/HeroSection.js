import React from "react";
import { NavLink } from "react-router-dom";

let HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <div className="max-w-140rem mx-auto py-0 px-40 ">
      <div className="grid grid-cols-2 gap-36">
        <div className="flex flex-col text-left self-center gap-6">
          <p className="text-blue-700 text-6xl">WELCOME TO</p>
          <h1 className="text-6xl font-medium">{name}</h1>
          <p className="text-lg">
            Explore a world of innovation and convenience at our electronic
            emporium. Discover cutting-edge gadgets and smart solutions that
            elevate your lifestyle. Embrace the future of technology with
            us—your destination for electronic excellence.
          </p>
          <NavLink>
            <button className="bg-blue-700 text-white rounded-lg py-4 px-8 border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96">
              SHOW NOW
            </button>
          </NavLink>
        </div>
        <div className="hero image">
          <figure>
            <img src="/heroimg.jpg" alt="hero" class="w-100 mt-6" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
