import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  return (
    <div className="wrapper px-40 ">
      <div className="grid grid-cols-[0.2fr,1fr] gap-12">
        <div>
          <FilterSection />
        </div>
        <section>
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
