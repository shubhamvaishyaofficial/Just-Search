import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { onAuthStateChanged } from 'firebase/auth';
import Dmenus from './Dmenus';
import { auth, db } from '../components/firebase';


const TotalProduct = () => {


    const [first, setfirst] = useState([])
    const [user, setUser] = useState("")


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])

    useEffect(() => {
        db.collection('services').onSnapshot(tap => (
            setfirst(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
        ))
    }, [])

    const delet = (uid) => {
        db.collection('services').doc(uid).delete()
    }


    const edit =(uid)=>{
db.collection('services').doc(uid).set()
    }
    return (
        <>
            <Dmenus />

            {first
                .map((e) => (
                    <>
                        {e.data.uid == user.uid ?

                            <>
                                <div className=' container'>
                                    <div className=' ssf row'>
                                        <div className='col-lg-6'>
                                            <img className='imoo' src={e.data.image} />
                                        </div>
                                        <div className='imoos col-lg-6'>
                                            <h4>{e.data.title}</h4>
                                            <p>{e.data.details}</p>
                                            <h6>Price : {e.data.price}</h6>
                                            <div className=' imooo '>

                                                <Link> <div ><AddAPhotoIcon />Images</div></Link>
                                                <Link onClick={() => delet(e.uid)}> <div><DeleteIcon />Delete</div></Link>
                                                <Link onClick={edit} > <div><BorderColorIcon  />Edit</div></Link>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </> : null
                        }
                    </>
                ))}


        </>
    )
}

export default TotalProduct