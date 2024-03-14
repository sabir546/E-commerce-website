import React from "react";
import CardItem from "./CardItem";
import Button from "@mui/material/Button";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1].map((item) => (
            <CardItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price</span>
                <span>₹4697</span>
              </div>

              <div className="flex justify-between pt-3 text-black ">
                <span>Discount</span>
                <span className=" text-green-600">-₹3419</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Total Amount</span>
                <span>₹1278</span>
              </div>
            </div>
            <Button
              variant="contained "
              className="w-full mt-5 "
              sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#9155fd" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
