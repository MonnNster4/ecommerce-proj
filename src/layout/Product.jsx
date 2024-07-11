import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

import { SidebarContext } from "../contexts/SidebarContext";

import Sidebar from "./Sidebar";

const Product = ({ product }) => {
  // console.log(product);

  const { addToCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { id, image, category, title, price } = product;

  const handleSubmit = () => {
    addToCart(product, id);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/*buttons*/}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={handleSubmit}>
              <div className="flex justify-center items-center w-12 h-12 bg-red-500 text-white">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              // to={`/product/${id}`}
              className="w-12 h-12 flex justify-center items-center bg-white text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className=" text-sm text-gray-500 mb-1 capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h1 className="font-semibold mb-1">{title}</h1>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
