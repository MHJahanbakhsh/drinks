import * as React from "react";
import { useContext } from "react";

//components
import Item from "./Item";
import { DrinksContext } from "../pages";

//mui
import Grid from "@mui/material/Grid";
import SortIcon from "@mui/icons-material/Sort"
import Button from '@mui/material/Button';


//styles
import styles from "../styles/List.module.css";

//@types
// import { IDrink } from "../@types/drink";

const List = () => {
  const {arrOfDrinks,setArrOfDrinks} = useContext(DrinksContext);
  const drinks = React.useRef(arrOfDrinks)
  const [sorted, setSorted] = React.useState(false)

  const onSortHandler = () => {
    if(sorted) return
    console.log('sorting')
    let newArray = arrOfDrinks.map((e) => e);
    setArrOfDrinks(newArray.sort((a, b) => (a.strDrink > b.strDrink ? 1 : -1)));
    setSorted(true)
  };

  const onResetHandler = ()=>{
    console.log('resetting')
    setArrOfDrinks(drinks.current)
    setSorted(false)
  }

  return (
    <>
      <div className={styles.iconsContainer} >
        <Button disabled={!sorted} className={styles.icon} variant="outlined" onClick={onResetHandler}>Reset</Button>
        <SortIcon  className={styles.icon} onClick={onSortHandler}/>
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
  );
};

export default List;
