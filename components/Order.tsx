import React from 'react'
import { SelectetDrinksContext } from './Main';

import { Typography } from '@mui/material';

const Order = ()=>{
    const { selectedDrinks, setSelectedDrinks } = React.useContext(SelectetDrinksContext);
    console.log(selectedDrinks)    
    return <Typography align='center' variant="h4">{`You have selected ${selectedDrinks} drinks so far`}</Typography>
}

export default Order