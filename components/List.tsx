import * as React from 'react';
import Item from './Item';
import { useEffect, useState, useLayoutEffect , useContext} from 'react';
import { DrinksContext } from '../pages';


const List = (props : any)=>{

    const drinks = useContext(DrinksContext)
    
    console.log({drinks})

    return <>
    <Item/>
    </>
}



export default List