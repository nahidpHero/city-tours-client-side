import React from 'react';

const ReviewCard = ({singleReview}) => {
    const {email,img,userName,review,serviceName}=singleReview
    return (
        <div>
            <div className="card  grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 bg-base-100 border-2 shadow-xl">
                <div>
                   <img className='rounded' src={img} alt="" />
                  
                </div>
                <div>
                <h1 className='text-xl font-bold'>Name:{userName}</h1>
                <h1>Email:{email}</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold' >Place:{serviceName}</h1>
                    <h1>Review:{review}</h1>


                </div>
             
           </div>

            
        </div>
    );
};

export default ReviewCard;