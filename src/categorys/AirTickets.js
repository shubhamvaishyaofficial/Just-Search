import React,{useState,useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { db } from '../components/firebase';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AirTickets = () => {
    
    const [data, setdata] = useState([])
    const [rating, setrating] = useState(null)

    useEffect(() => {
     db.collection('Category').doc('6qJKByoZ3ETb0q9gbkXc').collection('Air Tickets').onSnapshot(tab=>(
        setdata(tab.docs.map((e)=>(e.data())))
     ))

     
    }, [])


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Flight</Tab>
                    <Tab>Bus</Tab>
                    <Tab>Train</Tab>
                    <Tab>Hotel</Tab>
                </TabList>

                <TabPanel>
                    <div class="wrapper bg-white">
                        <form action="#">
                            <div class="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
                                <label class="option my-sm-0 my-2">
                                    <input type="radio" name="radio" checked />Round Trip
                                    <span class="checkmark"></span>
                                </label>
                                <label class="option my-sm-0 my-2">
                                    <input type="radio" name="radio" />One Way
                                    <span class="checkmark"></span>
                                </label>
                                <div class="d-flex align-items-center my-sm-0 my-2">
                                    <a href="#" class="text-decoration-none">
                                        Multi-city/Stopovers <span class="fas fa-angle-right ps-2 text-primary"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="form-group d-sm-flex margin">
                                <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="text" required placeholder="From" class="form-control" />
                                    <div class="label" id="from"></div>
                                    <span class="fas fa-dot-circle text-muted"></span>
                                </div>
                                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="text" required placeholder="To" class="form-control" />
                                    <div class="label" id="to"></div>
                                    <span class="fas fa-map-marker text-muted"></span>
                                </div>
                            </div>
                            <div class="form-group d-sm-flex margin">
                                <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                                    <input type="date" required placeholder="Depart Date" class="form-control" />
                                    <div class="label" id="depart"></div>
                                </div>
                                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="date" required placeholder="Return Date" class="form-control" />
                                    <div class="label" id="return"></div>
                                </div>
                            </div>
                            <div class="form-group border-bottom d-flex align-items-center position-relative">
                                <input type="text" required placeholder="Traveller(s)" class="form-control" />
                                <div class="label" id="psngr"></div>
                                <span class="fas fa-users text-muted"></span>
                            </div>
                            <div class="form-group my-3">
                                <div class="butt btn-primary rounded-0 d-flex justify-content-center text-center p-3">Search Flights
                                </div>
                            </div>
                        </form>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="wrapper bg-white">
                        <form action="#">
                            <div class="form-group d-sm-flex margin">
                                <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="text" required placeholder="From" class="form-control" />
                                    <div class="label" id="from"></div>
                                    <span class="fas fa-dot-circle text-muted"></span>
                                </div>
                                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="text" required placeholder="To" class="form-control" />
                                    <div class="label" id="to"></div>
                                    <span class="fas fa-map-marker text-muted"></span>
                                </div>
                            </div>
                            <div class="form-group d-sm-flex margin">
                                <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                                    <input type="date" required placeholder="Date of journey" class="form-control" />
                                    <div class="label" id="depart"></div>
                                </div>
                                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                    <input type="date" required placeholder="Date of return(optional)" class="form-control" />
                                    <div class="label" id="return"></div>
                                </div>
                            </div>
                            <div class="form-group my-3">
                                <div class="butt btn-primary rounded-0 d-flex justify-content-center text-center p-3">Search Bus
                                </div>
                            </div>
                        </form>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='trai container'>
                        <Tabs>
                            <TabList>
                                <Tab><p>By Station</p></Tab>
                                <Tab>By Train</Tab>
                            </TabList>

                            <TabPanel>
                                <div class="wrapper bg-white">
                                    <form action="#">
                                        <div class="form-group d-sm-flex margin">
                                            <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                                <input type="text" required placeholder="Select Staion From" class="form-control" />
                                                <div class="label" id="from"></div>
                                                <span class="fas fa-dot-circle text-muted"></span>
                                            </div>
                                            <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                                <input type="text" required placeholder="Select Staion To" class="form-control" />
                                                <div class="label" id="to"></div>
                                                <span class="fas fa-map-marker text-muted"></span>
                                            </div>
                                        </div>
                                        <div class="form-group d-sm-flex margin">
                                            <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                                                <input type="date" required placeholder="Departure" class="form-control" />
                                                <div class="label" id="depart"></div>
                                            </div>

                                        </div>
                                        <div class="form-group my-3">
                                            <div class="butt btn-primary rounded-0 d-flex justify-content-center text-center p-3">
                                                Search
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="wrapper bg-white">
                                    <form action="#">
                                        <div className='row'>
                                            <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                                <input type="text" required placeholder="Enter Train Name Or Number" class="form-control" />
                                                <div class="label" id="train"></div>
                                                <span class="fa fa-train text-muted"></span>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div class="form-group d-sm-flex margin">
                                                <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                                    <input type="text" required placeholder="Select Staion From" class="form-control" />
                                                    <div class="label" id="from"></div>
                                                    <span class="fas fa-dot-circle text-muted"></span>
                                                </div>
                                                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                                    <input type="text" required placeholder="Select Staion To" class="form-control" />
                                                    <div class="label" id="to"></div>
                                                    <span class="fas fa-map-marker text-muted"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                                                <input type="date" required placeholder="Departure" class="form-control" />
                                                <div class="label" id="depart"></div>
                                            </div>
                                        </div>
                                        <div class="form-group my-3">
                                            <div class="butt btn-primary rounded-0 d-flex justify-content-center text-center p-3">
                                                Search
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </TabPanel>

                        </Tabs>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='hotelle'>
                 <form action="reservation.php" method="post">
                        <div class="elem-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="visitor_name" placeholder="John Doe" required />
                        </div>
                        <div class="elem-group">
                            <label for="email">Your E-mail</label>
                            <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required />
                        </div>
                        <div class="elem-group">
                            <label for="phone">Your Phone</label>
                            <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" required />
                        </div>
                      
                        <div class="elem-group inlined">
                            <label for="adult">Adults</label>
                            <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required />
                        </div>
                        <div class="elem-group inlined">
                            <label for="child">Children</label>
                            <input type="number" id="child" name="total_children" placeholder="2" min="0" required />
                        </div>
                        <div class="elem-group inlined">
                            <label for="checkin-date">Check-in Date</label>
                            <input type="date" id="checkin-date" name="checkin" required />
                        </div>
                        <div class="elem-group inlined">
                            <label for="checkout-date">Check-out Date</label>
                            <input type="date" id="checkout-date" name="checkout" required />
                        </div>
                        <div class="elem-group">
                            <label for="room-selection">Select Room Preference</label>
                            <select id="room-selection" name="room_preference" required>
                                <option value="">Choose a Room from the List</option>
                                <option value="connecting">Connecting</option>
                                <option value="adjoining">Adjoining</option>
                                <option value="adjacent">Adjacent</option>
                            </select>
                        </div>


                        <button  type="submit">Book The Rooms</button>
                    </form>
                    </div>
                </TabPanel>
            </Tabs>

          
             
      <div className='cc container'>
        {data.map((e, i) => (
            <>
              <div className=" dddk row" key={i} >
                <div className=" imagepro col-lg-4">
                  <img className='imagesss' src={e.image} alt="..." />
                  <p></p>
                  <p></p>
                  <p></p>
                  <Link type='tel' className='linku'><div className='calld'><img src='https://img.icons8.com/ios-glyphs/512/ringer-volume.png' style={{ height: '30px' }} /> 
                  <h6 className='h6mobile'>{e.mobile}</h6></div></Link>
                  <Link><div className='location'><img style={{ height: '100%' }} src='https://img.icons8.com/ios/512/place-marker.png' /></div></Link>
                </div>
                <div className="ddds col-lg-6">
                  <div>
                    <h5 className="card-text">{e.title}</h5>
                    <div>Price : <h6>{e.price}</h6></div>
                    <details>
                      <summary>Details</summary>
                      <p>{e.details}</p>
                    </details>
                    <p className=" buuu card-text"><small className="text-muted"><Link to={`/services/${e.uid}`} className='lkk'>Best Deal </Link></small></p>
                    <div className=" ress">

                      {[...Array(5)].map((star, i) => {
                        const ratess = i + 1;
                        return (

                          <label>
                            <input className="starin" type="radio" name="rating" onClick={() => setrating(ratess)} />
                            <FaStar color={i++ < (rating) ? 'red' : 'blue'} className="star" size={20}


                            />

                          </label>

                        );
                      })}
                      <div>
                        <p>Thanks</p>
                        <h2>{rating}</h2>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


            </>
          ))}
      </div>
            
            

        </div>
    )
}

export default AirTickets
