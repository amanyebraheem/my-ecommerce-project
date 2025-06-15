


import { createContext, useState } from "react";
import { products } from "../Assest/assets";

export const ShopConext = createContext();



const getDefaultCart = ()=>{

    const cart ={};
for (let index = 0 ; index < products.length+1 ;index++){


    cart[index]= 0 ;
}
return cart ;
}


const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems]= useState(getDefaultCart());

    const currency = '$';
const delivery_fee = 10;


const addToCart = (itemId) =>{

setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
console.log(cartItems);
}

const removeFromCart = (itemId) =>{

    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

// total
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
      
        const itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };



// cart
const getTotalCartItem = ()=>{
let totalItem = 0 ;
for(const item in  cartItems){

    if(cartItems[item]>0){

totalItem+= cartItems[item];

    }

}
return totalItem;
}

const value = {
    getTotalCartAmount, products , currency ,delivery_fee, cartItems,addToCart ,removeFromCart,getTotalCartItem
};





    return(

        <ShopConext.Provider    value={value}  >
        
        {props.children}
        
        </ShopConext.Provider>
        
        
        )
        
        }
        
        export default  ShopContextProvider;
        
        
 