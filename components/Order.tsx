import React from 'react'
import { SelectetDrinksContext } from './Main';

import { Typography } from '@mui/material';

const Order = ()=>{
    const { selectedDrinks, setSelectedDrinks } = React.useContext(SelectetDrinksContext);
    console.log(selectedDrinks)    
    return <Typography align='center' variant="h4">you have selected no drinks</Typography>
}

export default Order