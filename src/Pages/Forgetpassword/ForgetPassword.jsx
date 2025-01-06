import axios from "axios"
import { useState } from "react"



const ForgetPassword = () => {
    const [email,setEmail] = useState("")
    // const [message,setMessage] = useState("")

    const handlePasswordReset =()=>{
        axios.post("http://localhost:5000/api/user/requestresetpassword",{email})
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))
        
    }
   
  return (
    <div className="forgotPasswordPage">
    <h2>Forgot Password</h2>
    <form onSubmit={handlePasswordReset}>
      <div className="formGroup">
        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <button type="submit" onClick={handlePasswordReset}>Request Password Reset</button>
    </form>
    {/* {message && <p>{message}</p>} */}
  </div>
  )
}

export default ForgetPassword