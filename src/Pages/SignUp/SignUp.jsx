import './SignUp.scss';
import image1 from '../SignIn/images/image1.jpg'
import logo from '../SignIn/images/Meubel House_Logos-05.png'
import {  Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

const SignUp = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  // const [register, setRegister] = useState(false);

  const configuration = {
    method: "post",
    url: "http://localhost:5000/api/user/signup",
    data:{
      username,
      email,
      password
    }
  };



  const handleSubmit =(e)=>{
    e.preventDefault()
    window.alert("submitted")

    axios(configuration)
    .then((data)=>{console.log(data)
      setUsername("")
      setEmail("")
      setPassword("")
    })
    .catch((error)=>console.log("error in sign up frontend", error))
  }
  return (
    <div className="signUp">
    <div className="sectionImage">
      <img src={image1} alt="Event Background" />
      <div className="overlay">
        <h2>You are royals</h2>
        <p>Join the Family! Sign Up Now for Exclusive Deals, Personalized Recommendations, and Early Access to New Arrivals!</p>
        <Link to="/signin">
          <button className="signInBtn">Sign in</button>
        </Link>
        
      </div>
    </div>
    <div className="register">
      <div className="name">
        <img src={logo} alt="brand-logo" />
        <h3>Funiro</h3>
      </div>
      <div className="aim">
        <h2>Quality is everything</h2>
      </div>

      <div className="registrationForm">
        <form className='thefrom' onSubmit={(e)=>handleSubmit(e)} >
          <div className="formGroup">
            <label>YOUR NAME</label>

            <input 
            type="text" 
            placeholder="Enter your name" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label>PASSWORD</label>
            <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button className="signUpBtn" onClick={(e)=>handleSubmit(e)}>Sign Up</button>

          <p className="or">Or</p>

          <div className="google">
            <button className="googleSignUp">
              <img src="https://img.icons8.com/fluency/48/google-logo.png" alt="Google Icon" />
              Google
            </button>
            <button className="googleSignUp">
              <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Google Icon" />
              Facebook
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
