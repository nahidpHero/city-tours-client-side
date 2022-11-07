import React from 'react';

const BannerItem = ({slide}) => {
    const {image,id, prev, next}=slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
   <div className='carousel-image'>
   <img src={image} className="w-full rounded-xl" />
   </div>
    <div  className="absolute transform -translate-y-1/2 left-24 right-5 top-1/4">
      <h1 className='text-6xl  font-bold '>CITYTOURS</h1>
    </div>
    <div  className="absolute transform -translate-y-1/2 left-24 right-5 top-1/3">
    <p className=' text-4xl font-bold  '>
     Discover the great cities of the world with us. <br></br>
    </p>
    </div>
    <div  className="absolute transform -translate-y-1/2 left-24 right-5 top-3/4">
    <input type="text" placeholder="Search for a city" className="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;

