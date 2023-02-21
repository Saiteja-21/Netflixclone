import { useEffect, useState } from "react";
//import { useState } from "react";
import "./Navbar.css";



const Navbar = () => {
  const [show, setShow] = useState(false);
  const changenavbarcolor = ()  =>{
   console.log(window.scrollY);
    if(window.scrollY>80){
      setShow(true);
      
    }
    else{
      setShow(false);
    }
   }

   useEffect(() => {
  
    window.addEventListener('scroll',changenavbarcolor)

     },[show]);
  console.log(window.scrollY);
  return (
   
    <div className={show?'nav__black':'nav'}>
  
      <li ><img className="nav__logo" src='./netflix-logo.jpg' alt='not found'></img></li>
      <li ><img className="nav__avatar"  src='./Netflix-avatar.png' alt='notfound'></img></li>
     

    </div>
 
  
 
   
  );
};

export default Navbar;
