
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import { Label } from "@mui/icons-material";
import React from "react";
import { Step } from "@mui/material";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Deliver",
  "Dealivered",
];
const OrderTracking = ({ activeStep }) => {
  return (
    <div className="w-full ">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((Label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracking;
