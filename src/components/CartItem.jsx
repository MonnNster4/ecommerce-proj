import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item, product }) => {
  //destructuring item

  const { addToCart } = useContext(CartContext);
  const { removeToCart } = useContext(CartContext);
  const { deleteToCart } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/*title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/*remove icon*/}
            <button
              onClick={() => {
                deleteToCart(product, id);
              }}
            >
              <div className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </button>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 border justify-center items-center h-full text-primary font-medium max-w-[100px] gap-2 ">
              <button
                onClick={() => {
                  removeToCart(product, id);
                }}
              >
                <div className="flex flex-1 justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
              </button>
              <div className="flex justify-center items-center h-full px-2">
                {amount}
              </div>
              <button
                onClick={() => {
                  addToCart(product, id);
                }}
              >
                <div className="flex flex-1 justify-center items-center cursor-pointer">
                  <FiPlus />
                </div>
              </button>
            </div>
            <div className="flex flex-1  justify-around items-center">
              $ {price}
            </div>
            <div className="flex flex-1 justify-end items-center ">
              {`$ ${parseFloat(price * amount).toFixed(2)} `}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
