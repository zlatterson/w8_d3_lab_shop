import React from "react";


function ShopItem({name,price, addToBasket,index}){

    const handleClick = (evt) => {
        addToBasket(evt.target.value)
    }

    return (
        <>
        <h1>{name}</h1>
        <h1>£{price}</h1>
        <button onClick={handleClick} value={index}>Add to basket</button>
        </>
    )
}

export default ShopItem;