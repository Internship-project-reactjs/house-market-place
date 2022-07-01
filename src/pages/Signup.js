import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import OAuth from "../components/OAuth";
import userIcon from '../assets/png/pngfind.com-privacy-icon-png-4703547.png'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitHndler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Signup Successfully !");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg p-4" onSubmit={onSubmitHndler}>
        <img className="uIcon" src={userIcon} alt="user" />
          <h4 className="sin" style={{marginBottom:"20px",borderRadius:"8px"}}>Sign Up </h4>
          <div className="mb-3">
          <input
            type='text'
            className='nameInput'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
          </div>
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
          
          <button type="submit" className="btn btn-primary w-100" style={{marginTop:"20px",marginBottom:'1rem'}}>
            Sign up
          </button>
          <hr/>
          <p className="or">OR</p>
          <div>
            <OAuth />
            <span className="new1">Already User</span> <Link to="/signin" className="sup new">Login</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
