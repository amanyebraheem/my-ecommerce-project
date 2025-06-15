import React from 'react'
import './Abouttas.css'
import about from '../../Assest/image/01255527507-p.jpg'


const Aboutas = () => {
  return (
    <div>
<div className='aboutas'>

<div className='aboutas-prag'>
    <p>ABOUT AS</p>
    <p style={{background:'black', width:'60px',height:'3px'}}></p>
</div>

<div className='aboutas-all'>

<div className='aboutas-right'>
<img   src={about}      alt=''/>
</div>
<div className='aboutas-left'>


<p>Clothing design is a creative process that includes many artistic and functional elements aimed at creating unique and attractive clothing. This process includes choosing fabrics, colors, shapes, and lines that reflect personal style or global trends in fashion. Clothing designs can range from everyday fashion to complex designs used for shows or special occasions.</p>
<p>Choosing the right fabric is one of the most important factors in designing clothes. Fabrics determine the shape, comfort, and durability of a piece. For example, cotton can be used for everyday fashion, while silk is used for more luxurious designs.</p>

<h3>Our Mission</h3>

<p>
Clothing design is often influenced by different cultures or time periods. The designer can take inspiration from traditional clothing, art, or from movies or theatre.
Colors are a powerful element in design, as they set the overall mood of a garment and play a big role in attracting attention or communicating a certain message. Designers always follow the color trends of different seasons.
</p>
</div>
</div>

</div>

<div className='shoose'>
    <div className='shoose-prog'>
    <p>WHY CHOOSE US</p>
    <p style={{background:'black', width:'60px',height:'3px'}} ></p>
    </div>


<div className='shoose-us'>
<div className='shoose-left'>
    <h3 style={{textAlign:'center'}}>Choose Us for unmatched</h3>
    <p style={{textAlign:'center'}} >Clothing design is a creative process that includes many artistic and functional</p>
</div>

<div className='shoose-center'>
<h3>quality and support</h3>
<p>Clothing design is often influenced by different cultures or time periods.</p>
</div>

<div className='shoose-right'>
<h3>support and hassle-free</h3>
<p>Designers always follow the color trends of different seasons.</p>
</div>
</div>

</div>

    </div>
  )
}

export default Aboutas