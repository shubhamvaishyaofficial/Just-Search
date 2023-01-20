import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { db } from '../components/firebase';
import React,{useState,useEffect} from 'react'

const AutoMobile = () => {

  const [data, setdata] = useState([])
  const [rating, setrating] = useState(null)

  useEffect(() => {
   db.collection('Category').doc('6qJKByoZ3ETb0q9gbkXc').collection('Auto mobile').onSnapshot(tab=>(
      setdata(tab.docs.map((e)=>(e.data())))
   ))
  }, [])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>New Cars</Tab>
          <Tab>Used Cars</Tab>
          <Tab>Sell Cars</Tab>
          <Tab>Buy & Sell Two Wheelers</Tab>
        </TabList>

        <TabPanel>
      {data.map((e)=>(
        <>
          <div className=" dddk row"  >
                <div className=" imagepro col-lg-4">
                  <img className='imagesss' src={data.image} alt="..." />
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
                    <a href=''><span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star dek"></span>
                      <span className="fa fa-star dek"></span></a>
                  </div>
                </div>
              </div>
        </>
      ))}
        </TabPanel>

        <TabPanel>
          <div className=' container'>
            <div className=' ssf row'>
              <div className='col-lg-6'>
                <img className='imoo' src='https://da4dkroembtou.cloudfront.net/wp-content/uploads/2020/06/Screenshot-2020-06-04-at-4.16.46-PM.png' />
              </div>
              <div className='imoos col-lg-6'>
                <h4></h4>
                <p></p>
                <h6>Price :</h6>
                <div className=' imooo '>

                  <div >Images</div>
                  <div>Delete</div>
                  <div>Edit</div>


                </div>
              </div>
            </div>

          </div>
        </TabPanel>

        <TabPanel>
          <div className=' container'>
            <div className=' ssf row'>
              <div className='col-lg-6'>
                <img className='imoo' src='https://carwow-uk-wp-2.imgix.net/RR_VELAR_EDITION_23MY_027_GLHD_140422_01-scaled-e1659537496312.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600' />
              </div>
              <div className='imoos col-lg-6'>
                <h4></h4>
                <p></p>
                <h6>Price :</h6>
                <div className=' imooo '>

                  <div >Images</div>
                  <div>Delete</div>
                  <div>Edit</div>


                </div>
              </div>
            </div>

          </div>
        </TabPanel>

        <TabPanel>
          <div className=' container'>
            <div className=' ssf row'>
              <div className='col-lg-6'>
                <img className='imoo' src='https://imgd.aeplcdn.com/1200x900/n/cw/ec/126579/450x-gen-3-right-front-three-quarter.jpeg?isig=0' />
              </div>
              <div className='imoos col-lg-6'>
                <h4></h4>
                <p></p>
                <h6>Price :</h6>
                <div className=' imooo '>
                  <div >Images</div>
                  <div>Delete</div>
                  <div>Edit</div>
                </div>
              </div>
            </div>

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

export default AutoMobile
