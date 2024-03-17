import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { deepPurple } from "@mui/material/colors";
import { Grid, Box } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
function OrderDetails() {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7"> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracking activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignitem: "center", justifyContent: "space-between" }}
          >
            <Grid item sx={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://media.samyakk.com/pub/media/catalog/product/s/l/sl12921.jpg"
                  alt=""
                />

                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Ruby Pink Mirror Embroidered Silk
                  </p>
                  <p className="space-x-5 opacity-60 text-sx font-semibold">
                    <span> Color: Pink</span> <span>Size: M</span>{" "}
                  </p>
                  <p>Crop Top Suit-SL12921</p>
                  <p>₹10,700</p>
                </div>
              </div>
            </Grid>
            <Grid item >
              <Box sx={{ color: deepPurple[500] }}>
                <StarOutlineIcon sx={{ fontSize: "2rem" }} className="px-2 " />
                <span>Rate & Review product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;
