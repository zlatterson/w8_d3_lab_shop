import React from "react";
import ShopItem from "./ShopItem";


const ShopList = ({shopItems, addToBasket}) => {

    const itemNodes = shopItems.map((item) => {
        // return console.log(item)
        return (
            <li>
                <ShopItem addToBasket={addToBasket} index={item.id} key={item.id} name={item.name} price={item.price}/>
            </li>
        )
    })

    return (
        <ul>
            {itemNodes}
        </ul>
    )
}

export default ShopList