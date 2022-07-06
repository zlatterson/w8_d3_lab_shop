import React from "react";


function BasketItem({name,price, addToBasket,index}){

    const handleClick = (evt) => {
        addToBasket(evt.target.value)
    }

    return (
        <>
        <h1>{name}</h1>
        <h1>£{price}</h1>
        </>
    )
}

export default BasketItem;