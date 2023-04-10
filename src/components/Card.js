import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import {addToCartAction} from '../actions/cartAction'




const Card = (product) => {

    const dispatch = useDispatch();
    const addItemHandler = (item) => {
        dispatch(addToCartAction(item))
    }

    let navigate = useNavigate(); 
    const redirectHandler = (id) => {
        navigate(`/product/${id}`, 
            {
                state:{
                    id : id
                }
            }
        );
    }

    return (
        <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                src={product.thumbnail}
                alt={product.title}
                onClick={() => redirectHandler(product.id)}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-neutral-50">
                        {product.brand}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-50">{product.title}</p>
                </div>
                <p className="text-sm font-medium text-neutral-50">$ {product.price}</p>
                <button onClick={() => addItemHandler(product)} className="inline-flex items-center px-3 py-2 rounded-full bg-indigo-800 text-stone-50 text-center" >
                    ADD <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export default Card;
