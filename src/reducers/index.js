import {combineReducers} from 'redux'
import fetchProductReducer from './fetchProductReducer'
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    product : fetchProductReducer,
    cart : cartReducer
});

export default rootReducer;