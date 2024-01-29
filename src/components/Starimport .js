import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

let Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <div className="wrapper">
      <div className="flex">
        <span className="flex text-yellow-400 text-xl">{ratingStar}</span>
        <p className="text-gray-500">({reviews}customer reviews)</p>
      </div>
    </div>
  );
};

export default Star;
