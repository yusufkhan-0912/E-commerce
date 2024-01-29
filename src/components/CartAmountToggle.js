import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

let CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="btn">
      <div className="toggle flex gap-6 mb-6 mt-6 text-2xl">
        <button
          onClick={() => {
            setDecrease();
          }}
        >
          <FaMinus />
        </button>
        <div className="">{amount}</div>
        <button
          onClick={() => {
            setIncrease();
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
