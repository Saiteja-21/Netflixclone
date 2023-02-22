import { useEffect, useState } from "react";
//import { useState } from "react";
import "./Navbar.css";



const Navbar = () => {
  const [show, setShow] = useState(false);
  const changenavbarcolor = ()  =>{
   console.log(window.scrollY);
    if(window.scrollY>50){
      setShow(true);
      
    }
    else{
      setShow(false);
    }
   }

   useEffect(() => {
    
  
    window.addEventListener('scroll',changenavbarcolor)

     },[show]);
 // console.log(window.scrollY);
  return (
   
    <div className={show?'nav__black':'nav'}>
      <img className="nav__logo" src={process.env.PUBLIC_URL + '/netflix-logo.png'}  alt="no"/> 
      <img className="nav__avatar" src={process.env.PUBLIC_URL + '/Netflix-avatar.png'}  alt="no"/> 
     

    </div>
 
  
 
   
  );
};

export default Navbar;
