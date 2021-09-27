import {React,useState} from 'react';
import { connect } from "react-redux";
 
import {  addToCart, } from "../redux/actions/actions";

function Select({addToCart,id}) {

    const [selected, upDateSelect] = useState(1);

     const handleSelect = (e) => {
      upDateSelect(e.target.value);
       };
  
 
    return (
        <div className="selected">

        <select onChange={handleSelect} className="Selected-Value"  >
 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <button
          onClick={()=>addToCart( id ,selected )}

          className="selected-butn">
          Add To Cart
        </button>
      </div>
             
     )
}
// const mapDispatchToState = (dispatch) => {
//     return {
//        addToCart: (id, value) => dispatch(addToCart(id, value)),
//     };
//   };

 export default connect(null, {addToCart})(Select);
 