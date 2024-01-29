import React from "react";
import Product from "./Product";

let GridView = ({ products }) => {
  return (
    <div className="wrappeer py-36 px-0">
      <div className="container max-w-120rem grid grid-cols-3">
        {products.map((curElm) => {
          return <Product key={curElm.id} {...curElm} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
