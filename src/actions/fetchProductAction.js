import { SET_PRODUCT } from "../variables"
const fetchProductAction = (data) => {
    return {
        type : SET_PRODUCT,
        payload : data
    }
}

export default fetchProductAction;