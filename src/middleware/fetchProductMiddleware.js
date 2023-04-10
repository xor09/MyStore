import fetchProductAction from "../actions/fetchProductAction";

const fetchProductMiddleware = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            dispatch(fetchProductAction(data.products));
        }
        catch(err) {
            console.log(err);
        }
    }
}

export default fetchProductMiddleware;