import * as React from "react";
import { useContext } from "react";

//components
import Item from "./Item";
import { DrinksContext } from "../pages";

//mui
import Grid from "@mui/material/Grid";
import SortIcon from "@mui/icons-material/Sort";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

//styles
import styles from "../styles/List.module.css";

const List = () => {
  const { arrOfDrinks, setArrOfDrinks } = useContext(DrinksContext);
  const [sorted, setSorted] = React.useState(false);

  //keeping a refrence of original(unsorted) array
  const drinksRef = React.useRef(arrOfDrinks);
  
  //update the refrence whenever we filter our result via searchbar
  React.useEffect(() => {
    setSorted(false);
    drinksRef.current = arrOfDrinks;
  }, [arrOfDrinks.length]);

  const onSortHandler = () => {
    if (sorted) return; 
    let newArray = arrOfDrinks.map((e) => e);
    //soring logic
    setArrOfDrinks(newArray.sort((a, b) => (a.strDrink > b.strDrink ? 1 : -1)));

    setSorted(true);
  };

  const onResetHandler = () => {
    //reset to original unsorted array
    setArrOfDrinks(drinksRef.current);

    setSorted(false);
  };

  return (
    <div style={{ minHeight: "65vh" }}>
      {arrOfDrinks.length === 0 ? (
        <Typography variant="h4" align="center">
          No matching result with your search
        </Typography>
      ) : (
        <>
          <div className={styles.iconsContainer}>
            <Button
              disabled={!sorted}
              className={styles.icon}
              variant="outlined"
              onClick={onResetHandler}
            >
              Reset
            </Button>
            <SortIcon className={styles.icon} onClick={onSortHandler} />
          </div>
          <div>
            <Grid container spacing={4}>
              {arrOfDrinks.map((drink) => {
                return (
                  <Grid key={drink.idDrink} item xs={12} sm={6} md={4}>
                    <Item {...drink} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(List);
