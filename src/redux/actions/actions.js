
import {SET_PRODUCTS,SET_PRODUCT,ADD_TO_CART,DELETE_PRODUCT,ADJUST_TO_CART} from './types'
import axios from 'axios';
 
export const fetchProducts = () => dispatch => {

    const URL='https://fakestoreapi.com/products';

    axios.get(URL).then(res=> dispatch ({
     type:SET_PRODUCTS,
     payload:res.data
    }))
 
   .catch(err => console.log(err));    
}
 
export const fetchProduct = id => dispatch =>{
    const URL =`https://fakestoreapi.com/products/${id}`;

    axios.get(URL).then(res => dispatch ({
        type:SET_PRODUCT,
        payload:res.data
    })).catch(err =>console.log(err));

 }
 export const addToCart = (itemID,value) =>{
     return{
         type:ADD_TO_CART,
         payload:{
        id:itemID,
        value
     }
    }
 }
 export const deleteProduct = (itemID)=>{
     return{
         type:DELETE_PRODUCT,
         payload:itemID
     }
 }
 export const adjustProduct = (itemID,value)=>{
     return{
         type:ADJUST_TO_CART,
         payload:{
             id:itemID,
             value
         }
     }
 }