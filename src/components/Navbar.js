
import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';

const Navbar = () => {


  
const [first, setfirst] = useState('')

  onAuthStateChanged(auth, (user) => {
    setfirst(user)
  });

  const log =()=>{
    signOut(auth)
     
  }

  return (

    <>
        <div className=" navbar sticky-top" >
          <div className="col-6">
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Link to='/'><img src=''/> <h3 className="animate-charcter">iEveEra</h3></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sudiv col-6">
          {first? <Link className='avtar' to='/' onClick={log}><Avatar/><h6 className='logname'>Logout</h6></Link> :  <Link className='avtar' to='/login'><Avatar/><h6 className='logname'>Login</h6></Link>}
          
            <button className=" tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">iEveEra Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <Link className='linku' to='/'>Home</Link>
                  </li>
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <Link className='linku' to='/profile'>Help</Link>
                  </li>
                  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <Link className='linku' to='/CategoryHome'>Category</Link>
                  </li>
                {first ?  <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                    <Link className='linku' to='/Dashboard'>Dashboard</Link>
                  </li>:''}
                </ul>
              </div>

            </div>
          </div>
        </div>
     
    </>

  )
}

export default Navbar
