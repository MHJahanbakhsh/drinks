import React from "react";
import { SelectetDrinksContext } from "../Main";

import { ButtonGroup } from "@mui/material";
import { Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export default function AddButton() {
const [itemCount, setItemCount] = React.useState(0);
const { selectedDrinks, setSelectedDrinks } = React.useContext(SelectetDrinksContext);


return (
	<div style={{ display: "block", marginTop:'10px'}}>
	<div>
		<Badge color="secondary" badgeContent={itemCount}>
		<AddShoppingCartIcon />{" "}
		</Badge>
		<ButtonGroup>
		<Button
			onClick={() => {
			setItemCount(Math.max(itemCount - 1, 0))
			setSelectedDrinks(Math.max(selectedDrinks - 1, 0))
			}}
		>
			{" "}
			<RemoveIcon fontSize="small" />
		</Button>
		<Button
			onClick={() => {
			setItemCount(itemCount + 1);
			setSelectedDrinks(selectedDrinks+1)
			}}
		>
			{" "}
			<AddIcon fontSize="small" />
		</Button>
		</ButtonGroup>
	</div>
	</div>
);
}
