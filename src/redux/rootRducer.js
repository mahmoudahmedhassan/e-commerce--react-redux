import productsReducer from '../redux/reducer/reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
 data: productsReducer,
 });

export default rootReducer;
