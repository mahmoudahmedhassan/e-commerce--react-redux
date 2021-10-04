import {SET_PRODUCTS,SET_PRODUCT,ADD_TO_CART,DELETE_PRODUCT,} from '../actions/types'

const initialState = {
    products: [],
    product:[],
    cart:[],
    selectValue:1,
   };
   const productsReducer =(state =initialState ,action)=>{
    
    switch (action.type) {

      // fetch products

      case SET_PRODUCTS:
        return {
          ...state,
          products:action.payload,
          loading: false,
        }

          // fetch product

         case SET_PRODUCT:
          return {
              ...state,
              product: action.payload,
              loading: false
          }


            case ADD_TO_CART:
              const item  = state.products.find(el => el.id === action.payload.id);
              const inCart = state.cart.find(el => el.id === action.payload.id);
              console.log(inCart) 
              console.log(`action ${action.payload.id}`) 
    
                return{
                  ...state,
                  cart :inCart ? 
                  state.cart.map(el => el.id === action.payload.id ? {...el, quantity:+action.payload.value} : el):
                  [...state.cart,{...item,quantity: +action.payload.value}]
                };




            case DELETE_PRODUCT:
              return {
                ...state,
                cart:state.cart.filter(el => el.id !== action.payload)
              }

             
              default: 
              return state
        
      }
     
  }
  export default productsReducer