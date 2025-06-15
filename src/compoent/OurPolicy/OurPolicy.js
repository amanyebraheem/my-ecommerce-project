import React from 'react'

import './OurPolicy.css'

import end from '../../Assest/image/end.png'
import cd from '../../Assest/image/cd.png'
import cdd from '../../Assest/image/cdd.png'

const OurPolicy = () => {
  return (
    <div>

<div  className='ourpolicy' >

<div className='ee'>

    
<img src={end} alt='' />
<h4>Easy Exchonge Policy</h4>
<p>We offer hassle free exchange Policy</p>
</div>

<div className='ee'>

    
<img src={cdd} alt='' />
<h4>7Days Retrun Policy</h4>
<p>We provide 7 days  free return  Policy</p>
</div>



<div className='ee'> 
<img src={cdd} alt='' />
<h4>Best customer support</h4>
<p>We provide 24/7 customer support</p>
</div>


    </div>


    </div>
  )
}

export default OurPolicy