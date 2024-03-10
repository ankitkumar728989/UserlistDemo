import React, { useState }  from "react";
import { useNavigate, useLocation} from "react-router-dom";
import "./login.css";

export function Login(){
    const {state} = useLocation();
    const navigate =useNavigate();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const from = state ? state.from.pathname : "/user";
const gotoRegisterationPage=()=>{
  navigate("/Registration", { replace: true });
  window.location.reload();  // need to change this
}

const handleInputChangeEmail=(event)=>{
   const {value}=event.target;
   setEmail(value);
}
const handleInputChangePassword=(event)=>{
    const {value}=event.target;
    setPassword(value);
}

const handleSignInPage=()=>{
  if(email && password){
    localStorage.setItem("token",password);
    navigate(from, { replace: true });
    window.location.reload();  // need to change this
  }else{
    return
  }
}
 return(
    <div className="MainPage">
       <h3>Login Page</h3>
    <div className="InputSection">
    <div className="Image">
    <img src="/Images/LoginPageImage.jpg" alt="image" />
    </div>
    <div className="Input-field">
    <div className="Email-Field">
    <input type="text" onChange={handleInputChangeEmail} placeholder="Enter your Email"/>
    </div>
    <div className="Password-Field">
    <input type="Password" onChange={handleInputChangePassword} placeholder="Enter your Password"/>
    </div>
    <div className="btn-section">
        <button onClick={handleSignInPage}>SignIN</button>
        <button onClick={gotoRegisterationPage}>Register</button>
    </div>
    </div>
   

    </div>
    </div>
    
    
 )
}

export default Login