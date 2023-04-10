import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { removeFromCartAction } from '../actions/cartAction';

const Cart = () => {
    const dispatch = useDispatch()
    const {data: items} = useSelector((state) => state.cart)

    const getTotal = () => {
        return items.reduce((accumulate, product)=>{
            return accumulate+product.price;
        }, 0)
    }

    const removeHandler = (id) => {
        dispatch(removeFromCartAction(id))
    }
   
    return (
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y text-neutral-50">
                        
                        { items.length ? 
                            items.map((product) => (
                
                            <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-neutral-50">
                                        <h3>
                                        <a href={product.href}>{product.title}</a>
                                        </h3>
                                        <p className="ml-4">$ {product.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-100">Qty: 1</p>

                                <div className="flex">
                                    <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => removeHandler(product.id)}
                                    >
                                    Remove
                                    </button>
                                </div>
                                </div>
                            </div>
                            </li>
                        )) :
                            <p>No Item added to cart</p>
                        }
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-100">
                    <p>Subtotal</p>
                    <p>${
                      getTotal()
                    }</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    </div>
                </div>
            </div>
    );
}

export default Cart;
