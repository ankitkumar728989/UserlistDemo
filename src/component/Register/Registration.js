import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  "./Registration.css"

export function Registration(){
    const navigate= useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobileNo,setMobileNo] = useState();
    const [City,setCity] = useState();
    const [errorObj,setErrorObj]=useState({
        name:{text:'Enter your Name',hashError:false},
        email:{text:'Enter your Email',hashError:false}
    })
    const gotoLoginPage=()=>{
        navigate("/")
    }

    const setRegistrationPage=()=>{
        if(name ==='') {
            let {email} =errorObj
            email.hashError=true;
            setErrorObj(errorObj);
        }
        if(email === ''){
            let {name} = errorObj;
            name.hashError= true;
            setErrorObj(errorObj);
        }
        if(name !=='' && email!==''){
        let obj={
            name:name,
            email:email,
            mobileNo:mobileNo,
            City:City
        }
        let users=localStorage.getItem("users")?localStorage.getItem("users"):[];
        users.push(obj);
        localStorage.setItem("users",JSON.stringify(users));
        navigate("/");
    }
    }

    const handleInputFieldChange =(event)=>{
        const {value,name}=event.target;
        if(name=="email"){
            let {email} =errorObj
            if(value==''){             
                email.hashError=true;
             setErrorObj(errorObj);
            }else{
                email.hashError=false;
                setErrorObj(errorObj);
            }
            setEmail(value);

        }else if(name=="name"){
            let {name}= errorObj;
            if(value==''){
                name.hashError=true;
                setErrorObj(errorObj);
               }else{
                name.hashError=false;
                   setErrorObj(errorObj);
               }
               setName(value);

        }else if(name=="mobileNo"){
            setMobileNo(value);

        }
        else{
            setCity(value);

        }

    }


return(
    <div className="main">
    <h3>Registration Page</h3>
    <div className="InputField">
        <div> <input type="text" name="name" onChange={handleInputFieldChange} required={true} placeholder="enter your Name"></input>
        </div>
        <span className="error">{errorObj.name.hashError?errorObj.name.text:''}</span>
        <div> <input type="text" name="email" onChange={handleInputFieldChange} required={true} placeholder="enter your Email"></input>
        </div>
        <span className="error">{errorObj.email.hashError?errorObj.email.text:''}</span>
        <div> <input type="number" name="mobileNo" onChange={handleInputFieldChange} placeholder="enter your mobileNo"></input></div>
        <div> <input type="text" name="city" onChange={handleInputFieldChange} placeholder="enter your City"></input></div>
    </div>
    <div className="btnSection">
     <button onClick={setRegistrationPage}>Registration</button>
     <button onClick={gotoLoginPage}>Login</button>
    </div>
    </div>
    
)

}


export default Registration;