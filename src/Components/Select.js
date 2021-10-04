import {React,useState} from 'react';
import { connect } from "react-redux";
 
import {  addToCart } from "../redux/actions/actions";

function Select({addToCart,id ,itemQuantity}) {
  
    const [item,setItem]=useState(itemQuantity);
    
    const [selected, upDateSelect] = useState(1);

     const handleSelect = (e) => {
       let value = e.target.value;
       upDateSelect(value);
        setItem(value) ;

        };
    return (
        <div className="selected">

        <select onChange={handleSelect} className="Selected-Value" value={item} >
 
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button
          onClick={()=>addToCart( id ,selected )}
          className="selected-butn">
          Add To Cart
        </button>
      </div>
 
     )
}

 export default connect(null, {addToCart})(Select);
 