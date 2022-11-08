import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {img,name,details,price,location,ratingsCount,ratings}=useLoaderData()
    return (
        <div>
           <div className="card  lg:card-side bg-base-100 shadow-xl">
     <img className='w-1/2 p-5' src={img} alt="Album"/>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold">{name}</h2>
    <p>{details}</p>
    <h2 className='font-bold'>Location:{location}</h2>
    <div className="card-actions font-bold justify-between">
        <div>
          <p>Price: {price}$</p>
          <p>Ratings Count :{ratingsCount}</p>
          <p>Ratings : {ratings}</p>
        </div>
       <div>
       <button className="btn btn-primary">Listen</button>
       </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;