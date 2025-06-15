import React , {useContext, useState, useEffect} from 'react'
import { ShopConext } from '../Context/ShopContext';
import ProductItem from '../compoent/ProductItem/ProductItem';
 
const Collection = () => {


  const [collection , setCollection] = useState([]);

  const {products}= useContext(ShopConext);

  const [category , setCategory] = useState ([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavent');


// category

  const toggleCategory = (e) =>{

    if(category.includes(e.target.value)){
    
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    
    } 
    
    else{
    
    setCategory(prev =>[...prev,e.target.value])
    
    }
    
    
    
    }


// subCategory

const togglesubCategory = (e) =>{

  if( subCategory.includes(e.target.value)){
  
  setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  
  }
  
  else{
  
    setSubCategory(prev =>[...prev,e.target.value])
    
    }
    
     }

// applyFilter 


const applyFilter =()=>{

  let productsCopy =products.slice();


if(category.length> 0){

  productsCopy= productsCopy.filter(item => category.includes(item.category));

}

if(subCategory.length> 0){

  productsCopy= productsCopy.filter(item => subCategory.includes(item.subCategory));
}
setCollection(productsCopy)

}


// Size sortProduct
const sortProduct = () =>{

  let fpcopy = collection.slice();
  switch (sortType){
  
    case 'low-high' :
      setCollection(fpcopy.sort((a,b)=>(a.price - b.price)))
  break;
  
  
  case 'high-low':
    setCollection(fpcopy.sort((a,b)=>(b.price - a.price )));
    break;
  
    default: 
    applyFilter();
    break;
  }
  
  
  }

  

// sortProduct

useEffect(()=>{
  sortProduct();

},[sortType])




// apply Filter

  useEffect(()=>{ 
    applyFilter();
  },[category,subCategory])
  
  




// Collection
  useEffect(()=>{ 
    setCollection(products) ;
},[])








  return (
    <div>



<div  className='collection'>


<div className='right'>

<p>FILTERS</p>

<div className='cattect'>

  <p>CATEGORES</p>
<p>
  <input  type='checkbox' value={'Men'} onChange={toggleCategory} /> Men
</p>

<p>
  <input  type='checkbox' value={'Women'}  onChange={toggleCategory}  /> Women
</p>

<p>
  <input  type='checkbox' value={'Kids'}     onChange={toggleCategory}     /> Kids
</p>

</div>



<div className='cattecte'>

  <p>TYPE</p>
  <p>
 <input type='checkbox' value={'Topwear'} onChange={togglesubCategory}   /> Topwear
</p>


<p>
<input type='checkbox' value={'Bottomwear'} onChange={togglesubCategory}   /> Bottomwear
 </p>


<p>
 <input type='checkbox' value={'Winterwear'}     onChange={togglesubCategory}      /> Winterwear
</p>

</div>




</div>

<div className='center'>
<div className='centerr'>
<div className='centers'    style={{display:'flex',alignItems:'center' , gap:'4px'}} >
<p>ALL COLLECTIONS</p>
<p style={{width:'60px', height:'3px' , background:'black' }}></p>
</div>

<select    onChange={(e)=> setSortType(e.target.value) }        style={{width:'30%',height:'40px', backgroundColor:'white' }} >
  <option value="relavent">Sort by: Relavent</option>
   <option  value="low-high" >Sort by: Low to High</option>
  <option  value="high-low" > Sort by:  High to Low      </option>

 </select>
</div>

<div className='coll'>

{


collection.map((item)=>(

<ProductItem   key={item}  id={item.id}  image={item.image}  name={item.name}   price={item.price}       />

))

}


</div>




</div>










    </div>



    </div>
  )
}

export default Collection