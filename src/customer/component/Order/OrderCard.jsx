import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg shadow-slate-300 hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top "
              src="https://623f30181eaa83099598-16e207344c04ef2ab9de865524643ff7.ssl.cf2.rackcdn.com/product-hugerect-487598-190500-1428759631-15bdfab30587ed200490ad7ad7ff1fb8"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Leriya Fashion Western Dress </p>
              <p className="opacity-50 font-semibold text-sm ">Size: M</p>
              <p className="opacity-50 font-semibold text-sm ">Color: blue</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />

                <span>Dealivered on march 17</span>
              </p>
              <p className="text-sx"> Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
