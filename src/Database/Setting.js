import React from 'react'
import { Link } from 'react-router-dom'

import Dmenus from './Dmenus'


const Setting = () => {

    return (
        <>
            <Dmenus/>
            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <div>
                        <span className="font-weight-bold project"><h2>Setting</h2></span>
                    </div>
                </div>
                <div className='seti container'>
                <div className=' setingdiv'>
                    <div className='setingdivv'>   <Link className='minlin'><span> <p>Dashboard</p></span></Link></div>
                    <div className='setingdivv'>   <Link className='minlin'><span> <p>Security</p></span></Link></div>
                    <div className='setingdivv'>   <Link className='minlin' ><span> <p>Genelar</p></span></Link></div>
                    <div className='setingdivv'>   <Link className='minlin'><span><p>Logout</p></span></Link></div>
                </div>
                </div>
                <div className=" dsv row mb-5">
                    <div className="col-md-4 mt-3">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Your Profile</h6>
                                <img src="https://img.icons8.com/ios-filled/2x/contract-job.png" width="50"></img>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mt-3">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Change Contact Details</h6>
                                <img src="https://img.icons8.com/ios-filled/512/contact-card.png" width="50"></img>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mt-3">
                        <Link  to='/web' className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Change Website template</h6>
                                <img src="https://img.icons8.com/ios-filled/512/resume-website.png" width="50"></img>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mt-3">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Help</h6>
                                <img src="https://img.icons8.com/ios-filled/512/help.png" width="50"></img>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mt-3">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Language</h6>
                                <img src="https://img.icons8.com/ios-filled/512/language.png" width="50"></img>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-3">
                        <Link className='minlin'>
                            <div className="bg-white p-3 rounded border">
                                <h6>Change Location</h6>
                                <img src="https://img.icons8.com/ios-filled/512/place-marker.png" width="50"></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting