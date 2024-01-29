import React from "react";
import { NavLink } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { useFilterContext } from "../context/filter_context";

let Sort = () => {
  const { filter_products, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <div className="wrapper my-10 grid grid-cols-3">
        <div className="container flex gap-4">
          <div>
            <NavLink>
              <button
                className="text-3xl p-2 bg-slate-200"
                onClick={setGridView}
              >
                <IoGrid />
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink>
              <button
                className="text-3xl  p-2 bg-slate-200"
                onClick={setListView}
              >
                <FaList />
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <p className="text-xl p-2">
            {`filter_products`.length} Products Available
          </p>
        </div>
        {/* ////3rd row // */}
        <div>
          <form action="#">
            <label htmlFor="sort">
              <select
                name="sort"
                id="sort"
                className="text-xl p-2 border-4 border-black rounded-sm"
                onClick={sorting}
              >
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="a-z">Price(a-z)</option>
                <option value="z-a">Price(z-a)</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sort;
