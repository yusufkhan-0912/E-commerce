import React from "react";
import { useFilterContext } from "../context/filter_context";

let FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  ////unique data of each fields

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElm) => {
      return curElm[property];
    });

    if (property === "colors") {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  /////////uniqye data

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <>
      <div className="wrapper">
        <div className="search section">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="w-72 h-12 border-2 text-xl mt-10 p-2 shadow-lg"
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="SEARCH"
            />
          </form>
        </div>

        <div className="filterSection">
          <h3 className="text-start mt-16 text-2xl font-medium mb-12">
            category
          </h3>
          <div className="grid gap-8">
            {categoryOnlyData.map((curElm, index) => {
              return (
                <button
                  className="text-xl text-start"
                  key={index}
                  type="button"
                  name="category"
                  value={curElm}
                  onClick={updateFilterValue}
                >
                  {curElm}
                </button>
              );
            })}
          </div>
          <div className="filter company">
            <h3 class="text-start mt-12 text-2xl font-medium mb-8">Company</h3>

            <form action="#">
              <select
                className="text-xl  border-2 border-black rounded-sm"
                name="company"
                id="company"
                onClick={updateFilterValue}
              >
                {companyData.map((curElm, index) => {
                  return (
                    <option value={curElm} name="company" key={index}>
                      {curElm}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <div className="filtercolors ">
            <h3 className="text-start mt-12 text-2xl font-medium mb-8">
              Colors
            </h3>
            <div className="colorstyle flex text-sm font-medium	">
              {colorsData.map((curColor, index) => {
                if (curColor === "all") {
                  return (
                    <button
                      key={index}
                      value={curColor}
                      name="color"
                      type="button"
                      className="h-6 w-6 rounded-full"
                      onClick={updateFilterValue}
                    >
                      <div className="border border-black rounded-full h-6 w-6 text-center text-slate-600">
                        <span>All</span>
                      </div>
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    value={curColor}
                    name="color"
                    type="button"
                    style={{ background: curColor }}
                    className="h-6 w-6 rounded-full ml-3"
                    onClick={updateFilterValue}
                  >
                    {color === curColor ? "" : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="clearfilter">
            <button
              className="bg-red-700 text-white rounded-lg py-3 px-8 mt-12"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
