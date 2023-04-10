import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProductMiddleware from "../middleware/fetchProductMiddleware";
import Card from "./Card";
  
const Home = () => {

    const dispatch = useDispatch();
    const {data : products}= useSelector((state) => state.product)

    useEffect(()=> {
        dispatch(fetchProductMiddleware())
    }, [])

    return (
      <div className="bg-black"> 
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-50">Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <Card key={product.id} {...product}/>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Home;
  