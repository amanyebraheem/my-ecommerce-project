// import React,{useState,useContext } from 'react'


// import './Navgo.css'
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from 'react-router-dom';

// import { AiOutlineSearch } from "react-icons/ai";
// import { AiOutlineShopping } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import Badge from '@mui/material/Badge';
// import Menu from '@mui/material/Menu';
// import { ShopConext } from '../../Context/ShopContext';

// import logo from '../../Assest/image/logo.webp'
// const Navgo = () => {


//     const [menu, setMenu] = useState("home");
// const {getTotalCartItem} = useContext(ShopConext);

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  



//   return (
//     <div>


// <Navbar expand="lg" >
     
//        <img src={logo} alt=''  style={{width:'100px'}} />
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
   
// <ul>

// <li
//     onClick={() => {
//       setMenu("home");
//     }}
//   >
//     <Link to="/" style={{ textDecoration: "none", color: "black" }}>
//       Home
//     </Link>
//     {menu === "home" ? <hr /> : <></>}
//   </li>


//   <li
// onClick={() => {
//   setMenu("collection");
// }}
// >
// <Link
//   style={{ textDecoration: "none", color: "black" }}
//   to="/collection"
// >
//   Collection
// </Link>
// {menu === "collection" ? <hr /> : <></>}
// </li>


//   <li
// onClick={() => {
//   setMenu("about");
// }}
// >
// <Link
//   to="/about"
//   style={{ textDecoration: "none", color: "black" }}
// >
//   About
// </Link>
// {menu === "about" ? <hr /> : <></>}
// </li>
// <li
// onClick={() => {
//   setMenu("contact");
// }}
// >
// <Link
//   to="/contact"
//   style={{ textDecoration: "none", color: "black" }}
// >
//   Contact
// </Link>
// {menu === "contact" ? <hr /> : <></>}
// </li>

// </ul>
// </Nav>


// <div className="icons">
//         <div>
//           <AiOutlineSearch     style={{ fontSize: "25px" }} />
//         </div>

//         <div> 

        
//           <AiOutlineUser style={{ fontSize: "25px" }}    
          
//           id="basic-button"
//           aria-controls={open ? 'basic-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClick}
          
          
//           />
//         </div>

//         <div>
//       <Link to='/cart'  style={{ textDecoration: "none", color: "black" }}  >

//       <Badge badgeContent={getTotalCartItem()} color="primary">
//       <AiOutlineShopping  style={{ fontSize: "25px" }} />
//     </Badge>

      
//       </Link>
         
//         </div>
//       </div>

        
        
       
         
        
//       </Navbar.Collapse>

      
//     </Navbar>



  
//     </div>
//   )
// }

// export default Navgoimport React, { useState, useContext } from 'react';
import React,{useState,useContext } from 'react'

import './Navgo.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import Badge from '@mui/material/Badge';

import { ShopConext } from '../../Context/ShopContext';
import logo from '../../Assest/image/logo.webp';

const Navgo = () => {
  const [menu, setMenu] = useState("home");
 
const {getTotalCartItem} = useContext(ShopConext);
  return (
    <div>
      <Navbar expand="lg">
        <img src={logo} alt='' style={{ width: '100px' }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <li onClick={() => setMenu("home")}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
                {menu === "home" && <hr />}
              </li>

              <li onClick={() => setMenu("collection")}>
                <Link to="/collection" style={{ textDecoration: "none", color: "black" }}>
                  Collection
                </Link>
                {menu === "collection" && <hr />}
              </li>

              <li onClick={() => setMenu("about")}>
                <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
                  About
                </Link>
                {menu === "about" && <hr />}
              </li>

              <li onClick={() => setMenu("contact")}>
                <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
                  Contact
                </Link>
                {menu === "contact" && <hr />}
              </li>
            </ul>
          </Nav>

          <div className="icons">
            <div>
              <AiOutlineSearch style={{ fontSize: "25px" }} />
            </div>

            <div>
              <Link to='/cart' style={{ textDecoration: "none", color: "black" }}>
                <Badge badgeContent={getTotalCartItem()} color="primary">
                  <AiOutlineShopping style={{ fontSize: "25px" }} />
                </Badge>
              </Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navgo;
