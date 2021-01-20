import {combineReducers} from 'redux';
import signup from './signup';
import login from './login';

const myReducer=combineReducers({
    signup,
    login
}); 

export default myReducer;