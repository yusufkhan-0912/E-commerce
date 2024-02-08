import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
let AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="wrapper">
      <div className="colors">
        <p className="flex gap-2">
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                className="rounded-full h-6 w-6"
                key={index}
                style={{ backgroundColor: curColor }}
              >
                {color === curColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to card */}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart">
        <button className="bg-blue-700 text-white rounded-lg py-3 px-6">
          Add To Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
