import React, { useState,useEffect, useContext } from 'react'
import './BestSeller.css'
import { ShopConext } from '../../Context/ShopContext';
import ProductItem from '../ProductItem/ProductItem';



const BestSeller = () => {


    const [bestseller , setBestseller]= useState([]);
const {products} = useContext(ShopConext);

    useEffect(()=>{ 
        setBestseller(products.slice(0,5)) ;
      },[])
  return (
    <div className='bestseller'>

    <div className='bestseller-p'>
        <p>BEST SELLERS</p>
        <p style={{width:'80px' , height:'3px' , background:'black'}}></p>
    </div>
    <p> Shine with colors and fabrics that add a modern touch to your wardrobe. From elegant dresses to attractive men's </p>
    


<div className='bestsellerss'>

{

bestseller.map((item) =>(

<ProductItem  id={item.id} key={item} image={item.image}  price={item.price} name={item.name}  />


))
}

</div>

        </div>
  )
}

export default BestSeller