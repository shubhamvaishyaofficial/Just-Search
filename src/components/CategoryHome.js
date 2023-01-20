import React from 'react'
import { Link } from 'react-router-dom'



const CategoryHome = () => {

 

 const data = [
  {id:1 ,kk:'https://img.icons8.com/ios-filled/512/combi-ticket.png',title:'Air Tickets',},
  {id:2 ,kk:'https://img.icons8.com/ios-filled/512/tesla-model-3.png',title:'Auto mobile' },
  {id:3,kk:'https://img.icons8.com/ios-filled/512/hotel-chekc-out.png' ,title:' Book Hotel'},
  
  {id:4 ,kk:'https://img.icons8.com/ios-filled/512/bridal-bouquet.png',title:' Flowers' },
  {id:5 ,kk:'https://img.icons8.com/ios-filled/512/jewelry.png' ,title:'Jewellery' },
  {id:6 ,kk:'https://img.icons8.com/external-others-pike-picture/512/external-Caterer-business-others-pike-picture-3.png',title:' Caterers' },
  {id:7,kk:'https://img.icons8.com/ios-filled/512/medical-doctor.png' ,title:'Doctor' },
  {id:8 ,kk:'https://img.icons8.com/ios-filled/512/teaching.png' ,title:'Education' },
  {id:9 ,kk:'https://img.icons8.com/ios-filled/512/weightlift.png',title:'Fitness' },
  {id:10 ,kk:'https://img.icons8.com/external-nawicon-mixed-nawicon/512/external-hospital-medical-nawicon-mixed-nawicon.png',title:'Hospitals' },
  {id:11 ,kk:'https://img.icons8.com/ios-filled/512/loading-truck.png',title:'Transporters' },
  {id:12 ,kk:'https://img.icons8.com/glyph-neue/512/dancing.png',title:'DanceMusic' },
  {id:13 ,kk:'https://img.icons8.com/ios-filled/512/find-matching-job.png',title:'Jobs' },
  {id:14 ,kk:'https://img.icons8.com/external-glyph-mangsaabguru-/512/external-sport-housework-and-hobby-glyph-glyph-mangsaabguru-.png',title:'Sports' },
  {id:15 ,kk:'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/512/external-decoration-diwali-vitaliy-gorbachev-fill-vitaly-gorbachev.png',title:'Decoration' },
  {id:16 ,kk:'https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/512/external-cleaning-stay-home-vitaliy-gorbachev-fill-vitaly-gorbachev.png',title:'Houes Keeping' },
  {id:17 ,kk:'https://img.icons8.com/ios-filled/512/designer.png',title:' Designer' },
  {id:18 ,kk:'https://img.icons8.com/external-creatype-glyph-undefined/512/external-realestate-realestate-solid-set-creatype-glyph-undefined.png',title:'RealEstate' },
  {id:19 ,kk:'https://img.icons8.com/ios-filled/512/money-bag-euro.png' ,title:'Loans' },
  {id:20 ,kk:'https://img.icons8.com/ios-filled/512/paid-bill.png',title:'Bill & Recharge' },
  {id:21 ,kk:'https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/512/external-flask-covid19-medical-and-healthcare-smashingstocks-mixed-smashing-stocks.png',title:'Labs' },
  {id:22 ,kk:'https://img.icons8.com/ios-filled/512/ambulance.png' ,title:'Emergency' },
  {id:23 ,kk:'https://img.icons8.com/ios-filled/512/google-code.png',title:'Programming' },
  {id:24 ,kk:'https://img.icons8.com/glyph-neue/512/newlyweds.png',title:'Wedding' }
  
]


  return (
  

  <div className=" kk ">
  {data.map((e) => (
   <>
   
    <div>
    <Link to={'/services/'+ e.id} className='lim'> <div className=' boxs '><img className='LKL' src={e.kk}/></div></Link><p className='text-center'>{e.title}</p>
    </div>

    
   </>
       ))}
  </div>

        
  

    
  )
}

export default CategoryHome
