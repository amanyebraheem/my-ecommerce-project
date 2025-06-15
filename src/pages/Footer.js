import React from 'react'
import logo from '../../src/Assest/image/logo.webp'
const Footer = () => {
  return (
    <div>

<div className='footer'>

<div className='right'>
<img src={logo} alt=''  style={{width:'100px'}}       />
<p>  From casual to formal, we offer a wide range of designs that will add a touch of elegance to your day. Shine with colors and fabrics that add a modern touch to your wardrobe.
From elegant dresses to attractive men's suits.</p>
</div>

<div className='center'>
<h4 style={{fontWeight:'700'}}   >COMPANY</h4>
<li>Home</li>
<li>About</li>
<li>Delivery</li>
<li>Privacy policy</li>

</div>
<div className='left'>
  <h4 style={{fontWeight:'700'}}>GETINTOUCH</h4>
<li>+1-2332-455-6755</li>
<li>contact@foreveryou.com</li>
</div>

</div>


<hr style={{width:'50%', background:'black' ,marginLeft:'250px'}} />
<p style={{textAlign:'center', fontWeight:'700'}}>Copyright 2024@ forever.com * All Right Reserved.</p>
    </div>
  )
}

export default Footer