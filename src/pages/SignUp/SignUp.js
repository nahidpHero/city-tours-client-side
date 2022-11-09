
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/images/login/signup.jpg'
import { Authcontext } from '../../provaider/AuthProvaider';



const SignUp = () => {
  const {createAccount}=useContext(Authcontext);
  const navigate=useNavigate();
  
    const handleSubmitSignup=(event)=>{
      event.preventDefault();
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password)
      createAccount(email,password)
      .then(result=>{
        const user=result.user;
        console.log(user)
        form.reset()
        navigate('/')
      })
      .catch(error=>console.error(error))
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <img src={signupImg}></img>
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmitSignup} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confurm Password</span>
                </label>
                <input type="text" name='confurm-password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
           <div>
             <p className='text-center'>Alredy have an Acount <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
           </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;