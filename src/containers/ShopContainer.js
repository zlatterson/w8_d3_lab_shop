import React,{useState, useEffect} from "react";
import BasketList from "../components/BasketList";
import Checkout from "../components/Checkout";
import ShopList from "../components/ShopList";



const ShopContainer = () => {

    const [user, setUser] = useState([
        {id: 1, name: "John", wallet: 100}
    ]);
    const [shopItems, setShopItems] = useState([
        {id: 1, name: "Milk", price: 1},
        {id: 2, name: "Bread", price: 2},
        {id: 3, name: "Pepsi-Max", price: 3}

    ]);
    const [basketItems, setBasketItems] = useState([]);

    const handleItemSelected = id => {
        setShopItems(id)
    }

    const addToBasket = function(index){
        const foundItem = shopItems.find(item => item.id == index)
        const updatedBasketItems = [...basketItems, foundItem]
        setBasketItems(updatedBasketItems)
    }

    // const addToBasket = function(index){
    //     const foundItem = shopItems.find(item => item.id == index)
    //     const checkIfInBasketAlready = basketItems.filter(item => item.name == foundItem.name)
    //     console.log(checkIfInBasketAlready.length)
    //     if (checkIfInBasketAlready.length > 0){
    //         const updatedBasketItems = [...basketItems, foundItem.quantity = checkIfInBasketAlready.length]
    //         setBasketItems(updatedBasketItems)
    //     }else{
    //         const updatedBasketItems = [...basketItems, foundItem]
    //         setBasketItems(updatedBasketItems)
    //     }
        
    // }

    // const addToBasket = function(index){
    //     const foundItem = shopItems.find(item => item.id == index)
    //     const checkIfInBasketAlready = basketItems.filter(item => item.name == foundItem.name)
    //     console.log(checkIfInBasketAlready)
    //     const updatedBasketItems = [...basketItems, foundItem]
    //     setBasketItems(updatedBasketItems)
    // }

    const buyItems = function(totalPrice){
        const userMoney = user[0].wallet
        const newUsermoney = userMoney - totalPrice
        setUser([{id: 1, name: "John", wallet: newUsermoney}])
        setBasketItems([])
    }


    return (
        <>
        <h1>Title</h1>
        {/* {user} */}
        <ShopList shopItems={shopItems} addToBasket={addToBasket}/>
        <BasketList basketItems={basketItems} onItemSelected={handleItemSelected}/>
        <Checkout basketItems={basketItems} buyItems={buyItems}/>
        </>
    )
}

export default ShopContainer