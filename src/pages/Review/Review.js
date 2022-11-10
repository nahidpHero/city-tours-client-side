import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../provaider/AuthProvaider';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {user}=useContext(Authcontext)
    const[reviews,setReviews]=useState([])


    useEffect(()=>{
        fetch(`https://city-tours-server-fvvxt9ngx-nahidphero.vercel.app/reviewes?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[user?.email])

    const handleUpdate=(id)=>{
      fetch(`https://city-tours-server-fvvxt9ngx-nahidphero.vercel.app/reviewes/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'Approved'})

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
          const remaining=reviews.filter(rev=>rev._id !==id)
          const approving=reviews.find(rev=>rev._id ===id)
          approving.status='Approved'
          const newReviews=[approving, ...remaining ]
          setReviews(newReviews);
        }
      })

    }


    const handleDelete=(id)=>{
        console.log(id)
        const proceed=window.confirm("Are you sure,you want to delete a review ")
        if(proceed){
            fetch(`https://city-tours-server-fvvxt9ngx-nahidphero.vercel.app/reviewes/${id}`,{
                method:'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('deleted successfully')
                    const remaining=reviews.filter(rev=>rev._id !==id)
                    setReviews(remaining)
                }
            })

        }
      }
    return (
        <div className=' mb-24 p-5'>
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Place</th>
        <th>Reviews</th>
        <th></th>
      </tr>
    </thead>
    

  </table>
</div>
           <div className='m-auto'>
           {
            reviews.map(singleReview=><ReviewCard
            key={singleReview._id}
            singleReview={singleReview}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            ></ReviewCard>)
           }
           </div>
        </div>
    );
};

export default Review;