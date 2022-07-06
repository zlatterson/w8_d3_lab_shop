import React from "react";
import BasketItem from "./BasketItem";

const BasketList = ({ basketItems, onItemSelected}) => {

   
    const basketNodes = basketItems.map((item) => {

        return (
            <li>
                <BasketItem index={item.id} key={item.id} name={item.name} price={item.price}/>
            </li>
        )
    })


    return (
        <>
        <ul>
        {basketNodes}
        </ul>
        </>
    )
}

export default BasketList