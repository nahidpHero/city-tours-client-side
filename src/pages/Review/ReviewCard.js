import React from 'react';

const ReviewCard = ({singleReview,handleDelete,handleUpdate}) => {
    const {_id,email,img,userName,review,serviceName,status}=singleReview

   
    return (
        <div >
 <div className="overflow-x-auto w-full">
  <table className="table w-full">
      <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)}>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <div className='font-bold'>
          {serviceName}  
          </div>
        </td>
        <td>{review}</td>
        <th>
          <button onClick={()=>handleUpdate(_id)} className="btn btn-success btn-xs">{status?status:'pending'}</button>
        </th>
      </tr>
    
  </table>
</div>
           
        </div>
    );
};

export default ReviewCard;

