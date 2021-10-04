import {React,useState,useEffect} from "react";
import { BiShoppingBag } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import  {Link} from "react-router-dom";
import {connect} from "react-redux"

function Header({cart}) {
  const [cartCount,updateCartCount] =useState(0);
  const [orderTotal,upDataOrderTotal] = useState('');

  useEffect(() => {
    let Count = 0;
    let total =0;

     cart.map((el) => ((
        Count += el.quantity,
      // Count ++;
      total += el.quantity * el.price
      )));

 
     updateCartCount( Count);
    //  upDataOrderTotal(total.parseFloat()); 

     upDataOrderTotal(total.toFixed(1));
  
  },[cart,cartCount,updateCartCount,upDataOrderTotal]);
  
  return (
    <div className="top-header">
      <Container>
        
        <div className="header">
          <div className="logo">
            <h3>
              <span>one</span> store
            </h3>
          </div>

          <Link to='/cart'> 
          <div className="store">
            <div className="all-price">
              EGP <span>{orderTotal}</span>
            </div>

            <div className="the-cart">
              <span>{cartCount}</span>
              <BiShoppingBag className="the-cart-icon" />
            </div>
          </div>
          </Link>
          
        </div>
      </Container>
    </div>
  );
}

 
const mapToStateToProps = (state) =>{
  return {
    cart : state.data.cart
  };
}
export default connect(mapToStateToProps)(Header);
