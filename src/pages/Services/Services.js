import React, { useEffect, useState,} from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const[allProduct,setAllProduct]=useState([])

   useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setAllProduct(data))
   },[])
   
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 text-center p-10'>
            {
                allProduct.map(product=><ServiceCard
                key={product._id}
                product={product}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;