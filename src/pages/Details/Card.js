import React from 'react';

const Card = ({singleReview}) => {
    const {_id,email,img,userName,review,serviceName}=singleReview
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
      <tr>
        <th>
          <label>
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
          <button className="btn btn-success btn-xs">Update</button>
        </th>
      </tr>
    
  </table>
</div>
</div>
            
       
    );
};

export default Card;