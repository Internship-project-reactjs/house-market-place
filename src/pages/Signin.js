import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/OAuth";
 import userIcon from '../assets/png/pngfind.com-privacy-icon-png-4703547.png'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login Success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email Or Password");
    }
  };
  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4" >
        <form className="bg p-4" onSubmit={loginHandler}>
          <img className="uIcon" src={userIcon} alt="user" />
          <h4 className="sin" style={{marginBottom:"20px",borderRadius:"8px"}}>Sign In</h4>
        <div className="emailInputDiv">
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          </div>
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={"https://house-marketplace-ecru.vercel.app/static/media/visibilityIcon.d42e2dff8b09be94d6d209f0e86cf2d3.svg"}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          <button type="submit" className="btn btn-primary w-100" style={{marginTop:"20px",marginBottom:'1rem'}}>
            Sign in
          </button>
          <div className="d-flex">
          <hr style={{width:"40%",marginLeft:"10px"}}/>
          <p className="pt-2 mx-2" style={{backgroundColor:"#E8E6FD"}}>OR</p>
          <hr style={{width:"40%",marginLeft:"0px"}}/>
          </div>
          <OAuth />
          
            <span className="new1">New User</span> <Link to="/signup" className="sup new">Sign up</Link>
          
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
