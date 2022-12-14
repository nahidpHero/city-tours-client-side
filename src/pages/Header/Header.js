import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/logo/sity-tours-logo.png'
import { Authcontext } from '../../provaider/AuthProvaider';

const Header = () => {
  const {logOut,user}=useContext(Authcontext)

   const handleSignout=()=>{
    logOut()
    .then(result=>{
      //sign out successfully
    })
    .catch(error=>{
      //some problem
    })
   }

    const menuItem=<>
    <li className='fond-semibold'><Link to='/home'>Home</Link></li>
    <li className='fond-semibold'><Link to='/services'>Sirvices</Link></li>
    <li className='fond-semibold'><Link>About</Link></li>
    <li className='fond-semibold'><Link to='/blog'>Blog</Link></li>
    {
      user?.email?
      <>
     <li className='fond-semibold'><Link to='/addservice'>Add Survices</Link></li>
       <li className='fond-semibold'><Link to='/review'>My reviews</Link></li>
       <button onClick={handleSignout} className=' btn-ghost'>LogOut</button>  
      </>
      :
      <>
      <li className='fond-semibold'><Link to='/login'>Login</Link></li>
        
      </>
    }
   

   </>

    return (
        <div>
        <div>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start h-20 mb-12 ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItem}
      </ul>
    </div>
    <a className=" normal-case "><img src={img} alt="" srcset="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold p-0">
    {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline btn-secondary">Appointment</a>
  </div>
</div>
 </div>
</div>
    );
};

export default Header;