import React from 'react';
import useTittle from '../../useTittle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addservice = () => {
    const notify = () => toast("Added successfully!");
    useTittle('add product')
     const  handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value
        const price=form.price.value
        const location=form.location.value
        const photoURL=form.photoURL.value
        const details=form.messege.value
        
        const services={name,price,location,photoURL,details}
        
        console.log(services)
        fetch('http://localhost:5000/services',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(services)
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

  
              
        
    
    return (
        <div>
            <ToastContainer/>
             <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 bottom-4 p-5'>
                <input name='name' type="text" placeholder="Place Name" className="input input-bordered w-full " />
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " />
                <input name='location' type="text" placeholder="location" className="input input-bordered w-full " />
                <input name='photoURL' type="url" placeholder="Photo URL"className="input input-bordered w-full" />
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