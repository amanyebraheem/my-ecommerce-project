import React, { useContext, useEffect, useState } from 'react'
import { ShopConext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

import RelatedProducts from '../compoent/RelatedProdiucts/RelatedProducts';



const Product = () => {
const {productId} = useParams();
const {products,currency ,addToCart  } = useContext(ShopConext);
const [productData , setProductData] = useState(false);
const [image , setImage] =useState('');


const fetchProductData = async () => {

  products.map((item) => {
    if (item.id === parseInt(productId)) {
      setProductData(item);
     setImage(item.image[0])
    }
    return null; 
  });
};



useEffect(()=>{

fetchProductData();

},[productId])



  return productData ?(
    <div>
    <div className='product'>

    <div className='product-img'>
    
    {
    
    productData.image.map((item)=>(
    
    <img   onClick={()=> setImage(item)}      src={item}  key={item}     alt=''    />
    
    ))
    
    }
    
    </div>
    <img  src={image} style={{marginTop:'30px'}}   alt='' />
    <div className='prodct-info'>
    
    <h2>{productData.name}</h2>
    <div className='start'>
    <AiFillStar style={{color:'gold'}} />
    <AiFillStar  style={{color:'gold'}}  />
    <AiFillStar   style={{color:'gold'}}  />
    <AiFillStar style={{color:'gold'}} />
    <AiFillStar  style={{color:'gold'}}  />
    <p>(122)</p>
    </div>
    <p style={{fontWeight:'bold'}}>{currency}{productData.price}</p>
    <p>{productData.description}</p>
    <div className='size'>
    <p>Select Size</p>
    <div >
    {
      productData.sizes.map((item)=>(
    
    <button     style={{backgroundColor:'#fff' , padding:'5px 11px'  , border:'1px solid  black ' , margin:'0px 2px'}}   key={item}>{item}</button>
    
      ))
    }
    </div>
    </div>
    
    <button    onClick={()=>{addToCart( productData.id)}}    className='btnn'>ADD TO CART</button>
    
    
    
    <hr style={{background:'black' , width:'400px'}} />
    <div>
    <p>100% Original product.</p>
    <p>Cash on delivery is availa.</p>
    <p>Easy return and exchange policy within 7 dats.</p>
    </div>
    </div>
    
    


       </div>
    
<div className='reviews'>

<div className='views'>
  <p>Desription</p>
  <p>Reviews (122)</p>
</div>
<div className='pragra'>

<p>From casual to formal, we offer a wide range of designs that will add a touch of elegance to your day. Shine with colors and fabrics that add a modern touch to your wardrobe.
From elegant dresses to attractive men's suits, every piece in our collection is designed to meet your needs with the highest standards of quality and comfort. A variety of choices for all tastes.
</p>


<p>From casual to formal, we offer a wide range of designs that will add a touch of elegance to your day. Shine with colors and fabrics that add a modern touch to your wardrobe.
From elegant dresses to attractive men's suits, every piece in our collection is designed to meet your needs with the highest standards of quality and comfort. A variety of choices for all tastes.
</p>

</div>


</div>
<RelatedProducts    category={productData.category}  subCategory={productData.subCategory}        />
  
</div>
  ):<div ></div>
}

export default Product



