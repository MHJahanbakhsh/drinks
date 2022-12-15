import * as React from "react";
import Item from "./Item";
import { useContext } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import { DrinksContext } from "../pages";

//@types
import { IDrink } from "../@types/drink";

const List = () => {
  const drinks = useContext(DrinksContext);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {drinks.map((drink) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Item {...drink} key={drink.idDrink} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default List;
