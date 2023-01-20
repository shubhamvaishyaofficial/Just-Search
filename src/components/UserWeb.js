
import React, { useState,useEffect } from 'react'
import { db } from './firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const UserWeb = () => { 

  const [title, settitle] = useState('')
  const [background, setbackground] = useState('')
  const [logo, setlogo] = useState('')
  const [about, setabout] = useState('')
  const [Reviews, setReviews] = useState('')
  const [link, setlink] = useState('')
  const [numb, setnumb] = useState('')

  const [data, setdata] = useState([])



  const publish =()=>{
    db.collection('userweb').doc('H4z7J9mhgKaLNPQyMQu0').update({title:title,background:background,logo:logo,about:about,Reviews:Reviews,link:link,numb:numb})
  }
 
  useEffect(() => {
   db.collection('userweb').onSnapshot(tap=>(
   setdata(tap.docs.map((e)=>(e.data())))
   ))
  }, [])
  

  return (
    <>
 {data.map((e)=>(
 <>
 <div className=' container'>
  <div>
  <img className='logoavta' src={e.background} />
 
  </div>
   <h3>{e.title}</h3>

 <div className="wsr container-fluid text-center">
   {/* <div><Link className='minlink'>Totale services</Link></div>
   <div> <Link className='minlink'> Reviews</Link></div>
   <div><Link className='minlink'> About us</Link></div>
   <div><Link className='minlink'> Contact us</Link></div> */}
    <Tabs>
              <TabList>
                <Tab>Totale services</Tab>
                <Tab>Reviews</Tab>
                <Tab>About us</Tab>
                <Tab>Contact us</Tab>
                <Tab>Website Link</Tab>
              </TabList>

              <TabPanel>
                <p>services</p>
              </TabPanel>
              <TabPanel>
                <p>{e.Reviews}</p>
              </TabPanel>
              <TabPanel>
                <p>{e.about}</p>
              </TabPanel>
              <TabPanel>
              <p><a target="_blank" href={"tel:" + e.numb}>{e.numb}</a></p>
              </TabPanel>
              <TabPanel>
                <p><a target="_blank" href={e.link}>{e.link}</a></p>
              </TabPanel>
            </Tabs> 
 </div>
</div>

<div>
<div class="container-fluid px-1 py-5 mx-auto">
<div class="row d-flex justify-content-center">
 <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
     <h3>Create Your Website</h3>
     <p class="blue-text"> Your Homepage Sends a Clear Message Great Website Tagline Examples</p>
     <div>
       
         <form class="form-card" onsubmit="event.preventDefault()">
             <div class="row justify-content-between text-left">
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">Background img url</label> 
                 <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)" onChange={(e)=>setbackground(e.target.value)}/> </div>
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">Logo Url</label> 
                 <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" onChange={(e)=>setlogo(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-between text-left">
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">Best Title
                 </label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" onChange={(e)=>settitle(e.target.value)}/> </div>
                 <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3">Phone number
                      </label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" onChange={(e)=>setnumb(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-between text-left">
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">Reviews
                 </label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" onChange={(e)=>setReviews(e.target.value)}/> </div>
                 <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3">Your Website Link
                      </label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" onChange={(e)=>setlink(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-between text-left">
                 <div class="form-group col-12 flex-column d-flex">
                      <label class="form-control-label px-3">About us</label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" onChange={(e)=>setabout(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-end">
                 <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={publish}>Publish</button> </div>
             </div>
         </form>
     </div>
 </div>
</div>
</div>
</div>
</>
 ))}
     
    </>


  )
}

export default UserWeb
