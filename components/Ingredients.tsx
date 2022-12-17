import React from "react";

//mui
import Chip from "@mui/material/Chip";

const Ingredients = (props: any) => {
  const data = props.data;
  const ingredients = [];

  //find non-null values and create new array from them
  for (let i = 1; i <= 15; i++) {
    let ingredientKey = `strIngredient${i}`;
    let measureKey = `strMeasure${i}`;
    if (data[measureKey]) {
      let strIngredient = data[ingredientKey];
      let strMeasure = data[measureKey];
      ingredients.push({ strMeasure, strIngredient });
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'space-around',
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {ingredients.map((each, i) => (
        <Chip variant="outlined" key={i} label={`${each.strMeasure} of ${each.strIngredient}`} />
      ))}
    </div>
  );
};

export default Ingredients;
