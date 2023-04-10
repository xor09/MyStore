import {ADD_TO_CART, REMOVE_FROM_CART} from '../variables'

const initialState = {
    data: [], //stores only product id
};

const cartReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case ADD_TO_CART:
            return {
                data : [...state.data, action.payload]
            }

        case REMOVE_FROM_CART:
            return {
                data : state.data.filter(product => product.id !== action.payload)
            }

        default:
            return state
    }
}

export default cartReducer;