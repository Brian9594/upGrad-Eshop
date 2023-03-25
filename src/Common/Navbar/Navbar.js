import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import "./Navbar.css";
import{Link} from "react-router-dom";
export default function Navbar() {


  return (
    <div>
    <AppBar sx={{background:'#3f51b5'}}>
     <Toolbar>
    <div className="nav">
    <ul >
      <li className='scart'><ShoppingCartIcon/></li>
      <li>upGrad-EShop</li>
      <div className='btn'>
      
       <li><Link to="/login"  ><button>LogIn</button></Link></li>
      <li><Link to="/signup" ><button>SignUp</button></Link></li>
      </div>
    </ul>
    </div>
   
     </Toolbar>
  
    </AppBar>
   
    </div>
  )
}
