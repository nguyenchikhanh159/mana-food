import {combineReducers} from 'redux';
import login from './login';
import saveid from './saveid';
import productcategory from './productcategory';
import productdetail from './productdetail';
import signup from './signup';
import cart from './cart'
import logout from './logout'
const myReducer=combineReducers({
    logout,
    cart,
    signup,
    login,
    saveid,
    productcategory,
    productdetail
}); 

export default myReducer;