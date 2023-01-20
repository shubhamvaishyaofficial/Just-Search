import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { db } from '../components/firebase'




const Dmenus = () => {
const [first, setfirst] = useState([])

useEffect(() => {
 db.collection('Add-Product').onSnapshot(tap=>(
    setfirst(tap.docs.map((e)=>(e.data())))
 ))
}, [])


  return (
    <>
      <div className=" nn container-fluid text-center">
      <div className='boxdash'> 
                <Link className='list' to='/AddProduct'>
                    <div>
                        <div className="numbers"><img className='imaged' src='https://img.icons8.com/ios-filled/512/add.png'/></div>
                        <div className="cardName">Add Product</div>
                    </div>
                    </Link>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> 
                <div className='boxdash'> 
                <Link className='list' to='/TotalProduct'>
                    <div >
                        <div className="numbers"><img className='imaged' src='https://img.icons8.com/ios-glyphs/512/data-arrived.png'/></div>
                        <div className="cardName">All Product</div>
                    </div>
                    </Link>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> 

                <div className='boxdash'> 
                <Link className='list' to='/Leads'>
                    <div>
                        <div className="numbers"><img className='imaged' src='https://img.icons8.com/ios-glyphs/512/message-preview.png'/></div>
                        <div className="cardName">Totale Leads</div>
                    </div>
                    </Link>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> 
                <div className='boxdash'> 
                <Link className='list' to='/Setting'>
                    <div>
                        <div className="numbers"><img className='imaged' src='https://img.icons8.com/ios-filled/512/settings.png'/></div>
                        <div className="cardName">Chack Setting</div>
                    </div>
                    </Link>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> 
           
  
   </div>

   
   
    </>
  )
}

export default Dmenus