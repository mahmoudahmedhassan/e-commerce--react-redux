import {React,useState} from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import  {Link} from "react-router-dom";
function Navbar() {
  
    const [active,setActive]=useState(false);
    const handleHover =()=>{
        setActive(!active);
     }

  return (
    <div className="bottom-header">
      <Container>
        <div className="nav">
         <Link to='/'> <div className={active? "navbar-home"  :"navbar-home active"} onClick={handleHover}>Home</div></Link>
         
          <Link to='/cart'><div className={!active ? "navbar-cart" : "navbar-cart active" } onClick={handleHover} >Cart</div></Link>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
