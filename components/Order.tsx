import React from "react";
import { SelectetDrinksContext } from "./Main";

//mui
import { Typography } from "@mui/material";

const Order = () => {
  const { selectedDrinks} = React.useContext(
    SelectetDrinksContext
  );
  return (
    <Typography
      sx={{ height: "10vh" }}
      align="center"
      variant="h6"
    >{`You have selected ${selectedDrinks} drinks so far`}</Typography>
  );
};

export default Order;
