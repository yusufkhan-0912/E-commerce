import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

let Product = (curElm) => {
  const { id, name, image, price, category } = curElm;
  return (
    <NavLink to={`/Singleproduct/${id}`}>
      <div className="card relative bg-slate-50 p-4">
        <figure>
          <img
            src={image}
            alt={name}
            className="hover:scale-95 ease-out duration-300"
          />
          <figcaption className="absolute top-6 right-6 bg-slate-50 py-1 px-2 text-slate-500 rounded-xl text-lg">
            {category}
          </figcaption>
        </figure>

        <div className="pt-4">
          <div className="flex justify-between">
            <h3 className="text-m text-slate-500 ">{name}</h3>
            <p className="text-rose-500">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
