import React from "react";

//components
import List from "./List";
import Order from "./Order";

//mui
import { Container } from "@mui/material";

//types
import { ISelectedDrinksContext } from "../@types/drink";



//main context of data with inital-values similar to useState
export const SelectetDrinksContext = React.createContext({
  selectedDrinks: 0,
  setSelectedDrinks: (prev: any) => {},
});

const Main = () => {
  const [selectedDrinks, setSelectedDrinks] = React.useState(0);

  // for passing useState values via context
  const value: ISelectedDrinksContext = {
    selectedDrinks,
    setSelectedDrinks,
  };
  return (
    <SelectetDrinksContext.Provider value={value}>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Order />
        <List />
      </Container>
    </SelectetDrinksContext.Provider>
  );
};

export default Main;
