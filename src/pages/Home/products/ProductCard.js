import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ProductCard = ({product}) => {
    const {_id,name,img,details,price}=product;
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
  {/* <figure><img src= alt="Shoes" /></figure> */}
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

export default ProductCard;