import React, { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Dmenus from "./Dmenus";
import { auth, db } from "../components/firebase";
import EnterKey from "../components/EnterKey";


const AddProduct = () => {
  const [title, settitle] = useState("");
  const [address, setaddress] = useState("");
  const [details, setdetails] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [mobile, setmobile] = useState("");

  const [user, setuser] = useState([]);
  const [select, setselect] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);


  const add = () => {
    db.collection("services").add({
      title: title,
      address:address,
      details: details,
      mobile: mobile,
      price: price,
      image: image,
      uid: user.uid,
    });
    db.collection("Category")
      .doc("6qJKByoZ3ETb0q9gbkXc")
      .collection(select)
      .add({
        title: title,
        address:address,
        details: details,
        mobile: mobile,
        price: price,
        image: image,
        uid: user.uid,
      });

    settitle("");
    setdetails("");
    setaddress('');
    setimage("");
    setprice("");
    setmobile("");
  };
  EnterKey(add, "Enter");

  return (
    <>
      <Dmenus />
      <div className="divadd">
      {/* <form class=" adds row g-3">
        <h2>Add Services</h2>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Service Title</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>settitle(e.target.value)} />
  </div>
  <div class="col-md-6">
    <label for="text" class="form-label">Service Details</label>
    <input type="text" class="form-control" value={details}  onChange={(e)=>setdetails(e.target.value)} />
  </div>
 
  <div class="col-md-6">
    <label for="inputtext4" class="form-label">Image url</label>
    <input type="text" class="form-control"  value={image}  onChange={(e)=>setimage(e.target.value)} />
  </div>
  <div class="col-md-6">
    <label for="inputtext4" class="form-label">Mobail No.</label>
    <input type="text"  maxlength="10" class="form-control"  value={mobile}  onChange={(e)=>setmobile(e.target.value)} />
  </div>

  <div class="col-md-6">
    <label for="inputtext4" class="form-label">Price</label>
    <input type="text" class="form-control" value={price}  onChange={(e)=>setprice(e.target.value)} />
  </div>
  <div class="col-md-6">
    <label for="inputtext4" class="form-label">Address</label>
    <input type="text" class="form-control" value={address}  onChange={(e)=>setaddress(e.target.value)}/>
  </div>
  
  <div class="col-md-4">
    <label for="inputState" class="form-label">Category</label>
    <select id="inputState" class="form-select" value={title}  onChange={(e)=>{setselect(e.target.value)}}>
      <option selected>Choose Category</option>
      <option className='optionse' >Select Category</option>
                <option className='optionse' >Auto mobile</option>
                <option className='optionse' >Labs</option>
                <option className='optionse' >Decoration</option>
                <option className='optionse' >Air Tickets</option>
                <option className='optionse' >Bill & Recharge</option>
                <option className='optionse' >Loans</option>
                <option className='optionse' >House Keeping</option>
                <option className='optionse' >Book Hotel</option>
                <option className='optionse' >Designer</option>
                <option className='optionse' >Programming</option>
                <option className='optionse' >Emergency</option>
                <option className='optionse' >Wedding</option>
                <option className='optionse' >Real Estate</option>
                <option className='optionse' >Jobs</option>
                <option className='optionse' >Education</option>
                <option className='optionse' >Jewellery</option>
                <option className='optionse' >Flowers</option>
                <option className='optionse' >Fitness</option>
                <option className='optionse' >Hospitals</option>
                <option className='optionse' >Doctor</option>
                <option className='optionse' >DanceMusic</option>
                <option className='optionse' >Sports</option>
                <option className='optionse' >Caterers</option>
                <option className='optionse' >Transporters</option>
    </select>
    
  </div>
  <div >
    <Link onClick={add}>Add Service</Link>
  </div>
      </form> */}
      <form class="form-card" onsubmit="event.preventDefault()">
             <div class="row justify-content-between text-left">
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">title</label> 
                 <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)" onChange={(e)=>settitle(e.target.value)}/> </div>
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">Details</label> 
                 <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" onChange={(e)=>setdetails(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-between text-left">
                 <div class="form-group col-sm-6 flex-column d-flex"> 
                 <label class="form-control-label px-3">image
                 </label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" onChange={(e)=>setimage(e.target.value)}/> </div>
                 <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3">Phone number
                      </label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" onChange={(e)=>setmobile(e.target.value)}/> </div>
             </div>
             <div class="row justify-content-between text-left">
             <select id="inputState" class="form-select" value={title}  onChange={(e)=>{setselect(e.target.value)}}>
      <option selected>Choose Category</option>
      <option className='optionse' >Select Category</option>
                <option className='optionse' >Auto mobile</option>
                <option className='optionse' >Labs</option>
                <option className='optionse' >Decoration</option>
                <option className='optionse' >Air Tickets</option>
                <option className='optionse' >Bill & Recharge</option>
                <option className='optionse' >Loans</option>
                <option className='optionse' >House Keeping</option>
                <option className='optionse' >Book Hotel</option>
                <option className='optionse' >Designer</option>
                <option className='optionse' >Programming</option>
                <option className='optionse' >Emergency</option>
                <option className='optionse' >Wedding</option>
                <option className='optionse' >Real Estate</option>
                <option className='optionse' >Jobs</option>
                <option className='optionse' >Education</option>
                <option className='optionse' >Jewellery</option>
                <option className='optionse' >Flowers</option>
                <option className='optionse' >Fitness</option>
                <option className='optionse' >Hospitals</option>
                <option className='optionse' >Doctor</option>
                <option className='optionse' >DanceMusic</option>
                <option className='optionse' >Sports</option>
                <option className='optionse' >Caterers</option>
                <option className='optionse' >Transporters</option>
    </select>     
             </div>
            
             <div class="row justify-content-end">
                 <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary"onClick={add}>Publish</button> </div>
             </div>
         </form>
      </div>

 
    </>
  );
};

export default AddProduct;
