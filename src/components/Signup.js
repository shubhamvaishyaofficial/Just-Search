import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import EnterKey from "./EnterKey";

function Signup() {


  const navigate = useNavigate('');
 

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
 

  const sing = () => {
    createUserWithEmailAndPassword(auth, email, pass, name)
      .then((result) => {
          
        console.log(result.user.uid);
        db.collection('username').doc(result.user.uid).set({pass:pass,email:result.user.email,name:name,uid:result.user.uid,isOnline:true,timeStamp:new Date()})
        navigate('/Dashboard')
      })
      .catch(() => {
       alert('plese enter currect email&address')
       
      });
    setname('')
    setemail('')
    setpass('')
  
  };
  EnterKey(sing,"Enter")

  return (
    <div className="badabox" >
      <div className="formm" >
        <div className="divinpu">
          <h1 >Signup</h1>

          <h6>UserName</h6>
          <input className='inppu' type='text' placeholder="Enter your Name" value={name} onChange={(e) => setname(e.target.value)} />

          <h6>Email</h6>
          <input className='inppu' type='text' placeholder="Enter your Name" value={email} onChange={(e) => setemail(e.target.value)} />

          <h6>Password</h6>
          <input className='inppu' type='text' placeholder="Enter your Name" value={pass} onChange={(e) => setpass(e.target.value)} />
        </div>

        <div className='bst' >

          <Link className="bbtt"  onClick={sing}> Signup</Link>
        </div>
        <div className="crettt">
          <Link className="crett" to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
