import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import EnterKey from "./EnterKey";



function Login() {
    
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  

  const Submission = () => {
     
           signInWithEmailAndPassword(auth,email,password)
           .then((result)=>
          {
            console.log(result)
            navigate('/Dashboard')
          }
           )
           .catch((errr)=>{
            console.log(errr)
           }
            
           )
  };

EnterKey(Submission,'Enter')
  return (
    <div className="dkk">

<div className="bigbox" >
      <div className="formm">
        <h2 className="logg">LOGIN</h2><br/><br/>
          <h6 className="h666">Email</h6>
        <input className='inppu' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address"/>
         <h6 className="h666" >Password</h6>
        <input className='inppu' onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password" />
        <div className="buut" >
          
          <div  className="bbt">
          <Link className="lim"  onClick={Submission} >Login</Link>
          </div>
        
        </div>
        <Link className="cret" to="/Signup">Sign up</Link>
      </div>
    </div>

    
    </div>

  );
}

export default Login;
