import React, { useContext } from 'react'
import { ShopConext } from '../../Context/ShopContext';
import './ProductItem.css'
import { Link } from 'react-router-dom';



const ProductItem = ({id , image , name , price }) => {


    const {currency} = useContext(ShopConext);
  return (
    <div>
<Link  to={`/product/${id}`}  style={{textDecoration:'none'}} >

<div className='imagg'    style={{overflow:'hidden'}} >
        <img   onClick={window.scrollTo(0,0)}      src={image[0]}  alt=''  style={{width:'100%' , height:'100%'}}   />


        </div>
 


<p style={{color:'black' }}>{name}</p>
<p style={{color:'black' }} >{currency}{price}</p>


</Link>

    </div>
  )
}

export default ProductItem