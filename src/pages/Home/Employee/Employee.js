import React from 'react';
import img1 from '../../../assets/images/employee/img-01.jpg'
import img2 from '../../../assets/images/employee/img-02.jpg'
import img3 from '../../../assets/images/employee/img-03.jpg'

const Employee = () => {
    return (
       <div className='my-24'>
        <div>
            <h1 className='text-6xl font-bold p-5'>Meet The Guides</h1>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Nahid Rahman</h2>
    <p>Adventure Maneger</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
            </div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Rupa Khondokar</h2>
    <p>Adventure Maneger</p>
    <p>She is most integilent person.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
            </div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Rubel Hassan</h2>
    <p>Adventure Maneger</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
            </div>

            
        </div>
       </div>
    );
};

export default Employee;