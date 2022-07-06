import React from "react";

const Checkout = ({ basketItems, buyItems}) => {

    const basketPrices = basketItems.map((item) => {
        return item.price
    })
    const total = basketPrices.reduce((runningTotal,price)=>{
        return runningTotal + price
    },0)

    const handleClick = (evt) => {
        buyItems(evt.target.value)
    }

    return (
        <>
        <h2>Total: £{total}</h2>
        <button onClick={handleClick} value={total}>Checkout</button>
        </>
    )
}

export default Checkout;