import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    { label: "On the way", Value: "On the way" },
    { label: "Delivered", Value: "Delivered" },
    { label: "Cancelled", Value: "Cancelled" },
    { label: "Returned", Value: "Returend" },
  ];
  return (
    <div className="lg:px-20 px:5">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className=" font-bold text-lg"> Filter</h1>
            <div className=" space-y-4 mt-10 ">
              <h1 className="font-semibold"> ORDER STATUS</h1>
              {orderStatus.map((Option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={Option.Value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-900"
                    htmlFor={Option.Value}
                  >
                    {Option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="spce-y-5">
            {[1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
