
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navgo from './pages/Navgo/Navgo';
import './App.css'
import {Routes ,Route    } from "react-router"
//pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'

import Cart from './pages/Cart'
import Order from './pages/Order'
import About from './pages/About'
import Product from './pages/Product'
import Footer from './pages/Footer';




const App = () => {
  return (
<div className='container'>

<Navgo />



<Routes>

<Route path='/'  element={<Home />}  />
<Route   path='/collection'  element={<Collection />}      />
<Route   path='/about' element={<About />}      />
<Route   path='/contact' element={<Contact />}      />
<Route path='/product/:productId'  element={<Product />}   />
<Route   path='/cart' element={<Cart />}      />

<Route   path='/order' element={<Order />}      />

</Routes>



<Footer />



</div>
  )
}

export default App