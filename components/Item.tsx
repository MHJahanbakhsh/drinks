import * as React from 'react';
import { DrinksContext } from '../pages';
import { useContext } from 'react';


const Item = ()=>{
    const drinks = useContext(DrinksContext)
    console.log({drinks})
    return <div>item</div>
}

export default Item
