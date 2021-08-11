import {React,useState,useEffect} from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import {deleteProduct,adjustProduct} from '../../redux/actions/actions';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Cart({ cart,deleteProduct,adjustProduct }) {
  const [selected,upDateSelectd]=useState('');
  const [cartCount,updateCartCount] =useState(0);
  const [subtotal,upDateSubtotal]=useState('');
  const [orderTotal,upDataOrderTotal] = useState('');

  useEffect(() => {
    let count =0;
    let total =0;
    let delivery= 50;
    cart.map(el=>(
      count +=el.quantity,
      total +=el.quantity*el.price
    ))
    updateCartCount(count);
    upDateSubtotal(total);
    upDataOrderTotal(total+delivery)

  }, [cart,subtotal,cartCount,updateCartCount,upDateSubtotal])
 
 const cartItems = (
    <>
      {cart.map((item) => (
        
      <motion.div className="item-content"

        // initial={{ scale: 0 }}
        // animate={{ rotate: 360, scale: 1 }
        // transition={{
        //   type:"spring",
        //   stiffness: 260,
        //   damping: 20,
        // }}

        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { duration: 0.5 },
         }}
        
        >
          <div className="item-poster">

            <div className="item-poster-img">
            <img src={item.image} alt={item.title} />
            </div>

            <div className="item-title">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>

          <div className="select-count-cart">
            <RiDeleteBin6Line className="delete-selected" onClick={()=>deleteProduct(item.id)} />
            <div className="selected">
              <button onClick={ ()=> adjustProduct(item.id,selected)} className='selected-add'> Add</button>
              <select onChange = {(e => upDateSelectd(e.target.value))} className="selected-value">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>

        </motion.div>
      ))}
    </>
  );

  return (
    <>
      <Container className ='main'>

        <motion.div className="cart" 
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        >
          <div className="item">
            <h3>
              your Shopping Bag <span> ({cart.length} items)</span>
            </h3>
            {cartItems}
          </div>

          {
            cart.length > 0 ? (
              <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="order-summary-content">
  
                <div className='price-details'>
                  <p className='subtotal'>
                    <span>subtotal</span> <span>EGB {subtotal}</span>
                  </p>
  
                  <p className='delivery'>
                    <span>delivery</span> <span>EGB 50</span>
                  </p>
                </div>
  
                <div className='total-price'>
                  <span>order total</span> <span>EGB {orderTotal}</span>
                </div>
  
                <button className='checkout'> checkout </button>
              </div>
            </div>
            ):null
          }

        </motion.div>
      </Container>
    </>
  );
}
const mapDispatchToState = (dispatch) => {
  return {
     deleteProduct:(id) => dispatch(deleteProduct(id)),
     adjustProduct:(id,value) => dispatch(adjustProduct(id,value))

  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.data.cart,
  };
};
export default connect(mapStateToProps,mapDispatchToState)(Cart);
