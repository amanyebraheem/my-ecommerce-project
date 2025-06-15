import React from 'react'

import './Hero.css'



import image from '../../Assest/image/header.jpg';
const Hero = () => {
  return (
    <div className='hero'>

<div className='right'>
<div className='right-pp'>
<p  style={{width:'80px' , height:'3px' , background:'black' }}></p>
<p>OUR BESTSELLERS</p>
</div>
<h3>Latest Arrivals</h3>
<div className='right-ppp'>
<p>SHOP NOW</p>
<p  style={{width:'80px' , height:'3px' , background:'black' }} ></p>
</div>
</div>
<div className='left'>

<img  src={image}    alt=''    />

</div>

    </div>
  )
}

export default Hero


