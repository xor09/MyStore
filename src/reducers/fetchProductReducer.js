import {SET_PRODUCT} from '../variables'

const initialState = {
    data: [],
};

const fetchProductReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_PRODUCT:
            return {
                data : action.payload
            }

        default:
            return state
    }
}

export default fetchProductReducer;