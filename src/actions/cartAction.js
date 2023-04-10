import { ADD_TO_CART, REMOVE_FROM_CART } from "../variables"
const addToCartAction = (data) => {
    return {
        type : ADD_TO_CART,
        payload : data
    }
}

const removeFromCartAction = (data) => {
    return {
        type : REMOVE_FROM_CART,
        payload : data
    }
}

export  {addToCartAction, removeFromCartAction};