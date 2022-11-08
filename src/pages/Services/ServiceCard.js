import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({product}) => {
    const {_id,img,name,details,price}=product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details?.slice(0,100)}...</p>
    <div className="card-actions justify-between">
      <div className='font-bold '>
        Price:{price}$
      </div>
      <div>
      <Link to={`/services/${_id}`}>
      <button className="btn btn-primary">details</button>
      </Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;