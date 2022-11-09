import React from 'react';

const Addservice = () => {
     const  handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value
        const price=form.price.value
        const location=form.location.value
        const photoURL=form.photoURL.value
        const details=form.messege.value
        
        const service={name,price,location,photoURL,details}
        
        console.log(service)

     }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 bottom-4 p-5'>
                <input name='name' type="text" placeholder="Place Name" className="input input-bordered w-full " />
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " />
                <input name='location' type="text" placeholder="location" className="input input-bordered w-full " />
                <input name='photoURL' type="text" placeholder="Photo URL"className="input input-bordered w-full" />
                <br />
               </div>
               <div>
               <textarea name='messege' className=" m-5 textarea textarea-bordered w-full h-48" placeholder="Details write hare"></textarea>
               </div>
            
            <div className='text-center'>
            <button type='submit' className="btn btn-secondary mb-5 mt-5">Add SERVICE</button>
            </div>
            </form>
            
        </div>
    );
};

export default Addservice;