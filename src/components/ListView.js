import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import { NavLink } from "react-router-dom";

let ListView = ({ products }) => (
  <div className="wrapper">
    <div className="container">
      {products.map((curElm) => {
        const { id, name, image, price, description } = curElm;
        console.log(curElm);

        return (
          <>
            <div className="grid grid-cols-[0.6fr,1fr] border-2 justify-center items-center">
              <figure className="w-96 h-80 flex justify-center items-center ml-8 hover:scale-95 ease-in duration-150">
                <img src={image} alt={name} />
              </figure>

              <div className="card grid gap-4">
                <h3 className="text-3xl mb-6 font-semibold">{name}</h3>
                <p className="text-xl">
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 220)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="bg-blue-700 text-white rounded-lg py-3 px-6 border-none transition-all duration-300 ease-in hover:bg-blue-300 transform scale-96">
                    READ MORE
                  </button>
                </NavLink>
              </div>
            </div>
          </>
        );
      })}
    </div>
  </div>
);

export default ListView;
