import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="border border-black cursor-pointer flex flex-col items-center justify-center ml-8  bg-gray-100 rounded-xl overflow:hidden; w-[15rem] h-5rem ">
      <div className=" h-[13rem] w-[12.5rem] ">
        <img
          className="rounded-lg  object-cover-top mt-3 h-full w-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title} </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
