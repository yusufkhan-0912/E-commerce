// import { useEffect } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "../src/Helper/FormatPrice";
import { TbTruckDelivery, TbReplaceOff } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Star from "./components/Starimport ";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>......Loading</div>;
  }

  return (
    <>
      <div className="wrapper">
        <PageNavigation title={name} />
        <div className="w-full px-48">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="productimage mr-4">
              <MyImage imgs={image} />
            </div>

            {/* product data */}
            <div className="product-data grid gap-3 py-36 px-0">
              <h2 className="text-4xl">{name}</h2>
              <Star stars={stars} reviews={reviews} />
              <p className="product-data-price text-xl text-blue-500">
                MRP:
                {
                  <del>
                    <FormatPrice price={price + 250000} />
                  </del>
                }
              </p>
              <p className="product-data-realprice text-xl font-medium	">
                Deal of the Day:
                <FormatPrice price={price} />
              </p>
              <p className="text-lg">{description}</p>

              <div className="container flex text-lg justify-between ">
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center">
                    <TbTruckDelivery className="icon stroke-4 text-2xl h-8 w-8" />
                    <p>Free Delivery</p>
                  </div>
                </div>

                <div className="product data warrant">
                  <div className="product flex flex-col items-center">
                    <TbReplaceOff className="icon text-2xl h-8 w-8" />
                    <p>30 Day Replacement</p>
                  </div>
                </div>

                <div className="product data warrant">
                  <div className="product flex flex-col items-center">
                    <TbTruckDelivery className="icon text-2xl h-8 w-8" />
                    <p>DigitalEra Delivery</p>
                  </div>
                </div>

                <div className="product data warrant">
                  <div className="product flex flex-col items-center">
                    <MdOutlineSecurity className="icon text-2xl h-8 w-8" />
                    <p>2 Year Warranty</p>
                  </div>
                </div>
              </div>
              <div className="product info grid gap-2">
                <p>
                  Available :{" "}
                  <span className="font-bold">
                    {stock > 0 ? "In Stock" : "Not Available"}
                  </span>
                </p>
                <p>
                  ID : <span className="font-bold">{id}</span>
                </p>
                <p>
                  Brand : <span className="font-bold">{company}</span>
                </p>
              </div>
              <hr className="w-11/12 border-gray-400" />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Singleproduct;
