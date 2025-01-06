import './SignIn.scss'
import{Link} from 'react-router-dom'
import image2 from '../SignIn/images/image2.jpg'
import logo from '../SignIn/images/Meubel House_Logos-05.png'
import axios from 'axios'
import { useState } from 'react'



const SignIn = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  // const [showPassword,setShowPassword] = useState(false)
 
  const configuration = {
    method: "post",
    url: "http://localhost:5000/api/user/signin",
    data: {
      email,
      password,
    },
  };



  const handleSubmit =(e)=>{
    e.preventDefault()
    window.alert("user logined in successfully")

    axios(configuration)
    .then((data)=>{
      console.log(data)
      setEmail("")
      setPassword("")
    })
    
    .catch((error)=>console.log("error in sign up frontend", error))
  }


  return (
           <div className="signUp">
           <div className="register">
             <div className="name">
               <img src={logo} alt="brand-logo" />
               <h3>Funiro</h3>
             </div>
             <div className="aim">
               <h2>Quality is everything</h2>
             </div>
             <div className="registrationForm">
               <form className='theform' onSubmit={(e)=>handleSubmit(e)}>
                 <div className="formGroup">
                   <label>Email</label>

                   <input 
                   type="email"  
                   placeholder="Enter your email" 
                   value={email}
                   onChange={(e)=>setEmail(e)}
                   
                   />
                 </div>
     
                 <div className="formGroup">
                   <label >PASSWORD</label>
                    <input 
                    type="password"
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e)=>setPassword(e)}
                    />  
                 </div>
                 

                 <button className="signUpBtn" onClick={(e)=>handleSubmit(e)}>Sign Up</button>

                 <p className="or">Or</p>
                  {/* <Link to="/forgetPassword">
                      <p>Forget password?</p>
                  </Link> */}
                  
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
           <div className="sectionImage">
             <img src={image2} alt="Event Background" />
             <div className="overlay">
               <h2>Welcome back</h2>
               <p>Transform Your Space Today! Explore Stylish, Affordable Furniture That Fits Your Life – Shop Now!</p>
               <Link to="/signup">
                <button className="signInBtn">Sign Up</button>
               </Link>
              
             </div>
           </div>
         </div>
  )
}

export default SignIn