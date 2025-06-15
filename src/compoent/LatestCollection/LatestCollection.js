import React, { useContext,useEffect,useState } from 'react'
import Title from '../Title/Title'
import { ShopConext } from '../../Context/ShopContext'
import ProductItem from '../ProductItem/ProductItem';
import './LatestCollection.css'
const LatestCollection = () => {

const {products} = useContext(ShopConext);



const [latestproducts , setLatestproducts] = useState([]);

useEffect(()=>{ 
    setLatestproducts(products.slice(0,10)) ;
},[])

  return (
    <div className='lates'>


<Title />

<div className='latestcollection'>

{

latestproducts.map((item)=>(

<ProductItem  id={item.id} key={item} image={item.image}  price={item.price} name={item.name}  />


))

}

</div>




    </div>
  )
}

export default LatestCollection