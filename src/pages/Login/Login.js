import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.jpg'

const Login = () => {
    const handleSubmit=(event)=>{

    }
    return (
        <div>
          <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <img src={loginImg}></img>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
           <div>
             {/* <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Li> </p> */}
           </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Login;