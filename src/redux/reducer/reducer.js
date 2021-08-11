import {SET_PRODUCTS,SET_PRODUCT,ADD_TO_CART,DELETE_PRODUCT,ADJUST_TO_CART} from '../actions/types'

const initialState = {
    products: [],
    product:[],
    cart:[],
    loading:false
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
          const inCart = state.cart.find(el => el.id == action.payload.id ? true : false);

            return{
              ...state,
              cart :inCart ? 
              state.cart.map(el => el.id == action.payload.id ? {...el, quantity:+action.payload.value +action.payload.value } : el):
              [...state.cart,{...item,quantity:1}]
            };

            case ADJUST_TO_CART:
              return {
                ...state,
                cart: state.cart.map(el => el.id == action.payload.id ? {...el, quantity:+action.payload.value }: el)

              }

            case DELETE_PRODUCT:
              return {
                ...state,
                cart:state.cart.filter(el => el.id !== action.payload)
              }
      }

     
      
     
      return state
  }
  export default productsReducer