import { IconButton, colors } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CardItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-cover object-top"
            src="https://blackberrys.com/cdn/shop/files/Printed_Casual_Shirt_In_Olive_Lord-ESCC2671V1NA23SN-image1.jpg?v=1695631193&width=2000"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Casual Olive Printed Shirt</p>
          <p className="opacity-70"> Size:L, Brown</p>
          <p className="opacity-70 mt-2"> Seller:BlackBerry </p>
          <div className="flex space-x-5 items-center pt-6 ">
            <p className="font-semibold"> ₹199</p>
            <p className="opacity-50 line-through">211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm"> 2 </span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
