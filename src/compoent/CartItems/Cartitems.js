import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopConext } from '../../Context/ShopContext'
import { AiOutlineClose } from "react-icons/ai";


export const Cartitems = () => {

const {getTotalCartAmount,products, removeFromCart,cartItems}= useContext(ShopConext);


  return (
    <div className='cartitems'>


<div className='cartitem-format-main'>

<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr style={{width:'100%', background:'black'}} />

{

products.map((e)=>{

if (cartItems[e.id]>0 ){

return<div>
<div>
    <div className='cartitems-format  cartitem-format-main     '>
<img src={e.image}  alt='' className='carticon-products'/>
<p>{e.name}</p>
<p>${e.price}</p>



<button className='cartitems-quantity'>{cartItems[e.id]}</button>
<p>{e.price*cartItems[e.id]}</p>
<AiOutlineClose  onClick={()=> {removeFromCart(e.id)}} style={{width:'17px' , margin:'0 40px' , cursor:'pointer'}}  />

    </div>

    <hr style={{width:'100%', background:'black'}} />
</div>


</div>

}
return null;
})
}

<div className='cartitem-down'>

<div className='cartitems-total'>
<h1>cart Total</h1>
<div>
    <div className='cartitems-total-item'>
<p>Subtatal</p>
<p>${getTotalCartAmount()}</p>
    </div>
    <hr style={{width:'100%', background:'black'}} />
<div className='cartitems-total-item'>
<p>Shipping Free</p>
<p>Free</p>
    </div>
    <hr style={{width:'100%', background:'black'}} />
<div className='cartitems-total-item'>

<h3>Total</h3>
<h3>${getTotalCartAmount()}</h3>
</div>

</div>
<button>PROCEED TO CHECKOUT</button>
</div>



</div>


    </div>
  )
}

