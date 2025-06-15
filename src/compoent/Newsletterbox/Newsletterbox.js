import React from 'react'
import './Newsletterbox.css'



const Newsletterbox = () => {

const onSubmitHandler = (event)=>{

event.preventDefault();

}


  return (
    <div className='newsletterbox'>

<div style={{textAlign:'center' , marginTop:'50px'}} >

    <h5 style={{fontWeight:'700'}}>Subscribe now & get 20% off</h5>
    <p> we offer a wide range of designs that will add a touch of elegance to your day.</p>
</div>        
<form  onSubmit={onSubmitHandler}  >

  <input type='email'  placeholder='Enter Your Email'   />
  <button type='submit' >Submit</button>
</form>
    </div>
  )
}

export default Newsletterbox