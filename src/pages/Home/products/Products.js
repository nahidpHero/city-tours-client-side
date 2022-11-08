import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/limitservices')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       <div>
        <div>
            <h1 className='text-center text-5xl font-bold mt-36 mb-24'>Popular Attractions In Bangladesh</h1>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 text-center p-5'>
            
            {
                products.map(product=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
        <div className='text-center my-8'>
            <button className='btn btn-success px-8 font-bold' ><Link to='/services'>See all</Link> </button>
        </div>
       </div>
    );
};

export default Products;