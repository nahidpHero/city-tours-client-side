import React, { useContext, useEffect, useState } from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../provaider/AuthProvaider';
import useTittle from '../../useTittle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';

const Details = () => {
  const [review,setreview]=useState([])
  const notify = () => toast("thanks for your complement!");
    const {_id,img,name,details,price,location,ratingsCount,ratings}=useLoaderData()
    const {user}=useContext(Authcontext)
    const navigate=useNavigate();
    useTittle('details')

   const handleSumbitRevew=(event)=>{
    event.preventDefault()
    if(user?.email){
     const textArea=event.target.textarea.value;
     console.log(textArea)
     let reviewe={
      service:_id,
      serviceName:name,
      userName:user.displayName,
      email:user.email,
      img:user.photoURL,
      review:textArea
     }

  fetch('https://city-tours-server-fvvxt9ngx-nahidphero.vercel.app/reviewes',{
  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(reviewe)
 })
 .then(res=>res.json())
 .then(data=>{
  console.log(data)
  if(data.acknowledged){
    notify()
  }
 })
 .catch(error=>console.error(error))
    }
    else{
      if (window.confirm("Please login.if you want to login")) {
        navigate('/login');
      }   
};
    }
 useEffect(()=>{
  fetch("https://city-tours-server-fvvxt9ngx-nahidphero.vercel.app/reviewes")
  .then(res=>res.json())
  .then(data=>setreview(data))
  .catch(error=>console.error(error))
 },[])
    

    
    

   

    return (
        <div>
          <ToastContainer/>
           <div className="card  lg:card-side bg-base-100 shadow-xl">
     <img className='lg:w-1/2 p-5 img-fluid ' src={img} alt="Album"/>
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
       <button className="btn btn-primary">Please confurm</button>
       </div>
    </div>
  </div>
</div>
<div>
  <h1 className='text-3xl font-bold mb-5' >Please add your review</h1>
  <form onSubmit={handleSumbitRevew} className="form-control">
  <textarea name='textarea' className="textarea textarea-bordered h-24" placeholder="Add your comment please"></textarea>
<div className="form-control">
<button className='btn btn-success w-52'>post</button>
</div>
</form>
<div>
  <div>
    <h1 className='text-3xl font-bold text-center '>Some of review here</h1>
  </div>
  <div>
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
            review.map(singleReview=><Card
            key={singleReview._id}
            singleReview={singleReview}
            ></Card>)
           }
           </div>

  </div>
</div>
</div>
</div>
    );
};

export default Details;