import React from "react";
import { Button, Grid, Box, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
const AddDeliveryForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      fistName: data.get("firstName"),
      lastName: data.get("lastName"),
      Address: data.get("Address"),
      City: data.get("city"),
      State: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("address", address);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          sx={12}
          lg={5}
          className="border rounded-e-md  shadow-md h=[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              {" "}
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5 ">
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item sx={12} sm={12}>
                  <TextField
                    required
                    id="Address"
                    name="Address"
                    label="Address"
                    fullWidth
                    autoComplete="given-Address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-city"
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-zip"
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-phoneNumber"
                  />
                </Grid>
                <Grid>
                  <Button
                    sx={{ py: 1.5, ml: 3, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDeliveryForm;
