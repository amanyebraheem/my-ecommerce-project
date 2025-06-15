import React, { useContext, useEffect, useState } from 'react'

import './RelatedProducts.css'


// import ProductItems from '../ProductItem/ProductItems';
import { ShopConext } from '../../Context/ShopContext';
import ProductItem from '../ProductItem/ProductItem';

const RelatedProducts = ({category , subCategory }) => {

const {products}= useContext(ShopConext)
// const {products} =useContext(ShopConext);
const [related , setRelated] = useState([]);


useEffect(()=>{

   if(products.length >0){
let productsCopy = products.slice();

productsCopy = productsCopy.filter((item) =>category === item.category);
productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

setRelated(productsCopy.slice(0,5));
   }
    

},[products])

  return (
    <div className='proo'>

<div className='prooo'>
<p>RELATED PROOUCTS</p>
<p  style={{background:'black' , width:'60px' , height:'3px'}}></p>
</div>

<div className='related'>

{
    related.map((item)=>(


<ProductItem     key={item}  id={item.id}   name={item.name}  price={item.price}   image={item.image}       />



    ))

  }

</div>
    </div>
  )
}

export default RelatedProducts