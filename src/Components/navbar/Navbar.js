import { React } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";
function Navbar() {
  
  return (
    <div className="bottom-header">
      <Container>
        <div className="nav">

          <NavLink to="/" exact activeClassName="active">
            <div
              className="navbar-home "
            >
              Home
            </div>
          </NavLink>

          <NavLink exact to="/cart"activeClassName="active" >
            <div
              className="navbar-cart"
              activeClassName="acctive"
              
            >
              Cart
            </div>
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
