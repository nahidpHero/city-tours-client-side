import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../provaider/AuthProvaider';

const Details = () => {
    const {img,name,details,price,location,ratingsCount,ratings}=useLoaderData()
    const {user}=useContext(Authcontext)

   const handleSumbitRevew=(event)=>{
    event.preventDefault()
    const textArea=event.target.textarea.value;
    console.log(textArea)

   } 

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
<div>
  <h1 className='text-3xl font-bold mb-5' >Please add your review</h1>
  <form onSubmit={handleSumbitRevew} className="form-control">
  <textarea name='textarea' className="textarea textarea-bordered h-24" placeholder="Add your comment please"></textarea>
   {
    user?.email?
    <>
    <button  className='btn w-24 btn-success'>POST</button>
    </>
    :
    <>
    <button disabled className='btn w-24 btn-success'>POST</button>
    </>
   }
</form>

</div>
</div>
    );
};

export default Details;