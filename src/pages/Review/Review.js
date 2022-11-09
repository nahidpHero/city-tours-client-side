import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../provaider/AuthProvaider';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {user}=useContext(Authcontext)
    const[reviews,setReviews]=useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/reviewes?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[user?.email])
    return (
        <div className=' mb-24 p-5'>
           <div className='m-auto'>
           {
            reviews.map(singleReview=><ReviewCard
            key={singleReview._id}
            singleReview={singleReview}
            ></ReviewCard>)
           }
           </div>
        </div>
    );
};

export default Review;