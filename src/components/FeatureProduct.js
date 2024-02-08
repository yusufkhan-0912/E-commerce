import { useProductContext } from "../context/Productcontext";
import Product from "./Product";

let FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>.......Loading</div>;
  }
  return (
    <>
      <div className="py-16 px-0 bg-slate-300 flex justify-center">
        <div className="max-w-7xl">
          <div className="intro">Check Now!</div>
          <div className="text-3xl font-semibold mb-8">
            Our Feature Services
          </div>
          <div className="grid grid-cols-3 gap-6">
            {featureProducts.map((curElm) => {
              return <Product key={curElm.id} {...curElm} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
