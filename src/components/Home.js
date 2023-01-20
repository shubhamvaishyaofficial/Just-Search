import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { db } from "./firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [first, setfirst] = useState([]);

  const [rating, setrating] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    db.collection("services").onSnapshot((tap) =>
      setfirst(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    );
  }, []);

  return (
    <>
      <div className="h22">
        <img
          className="h222"
          src="https://res.cloudinary.com/djxhucsls/image/upload/v1673324293/aaaaaaaaaaaa_p8yh1t.png"
        />
        <div className=" ww spinner-border text-warning" role="status"></div>
      </div>
      <div className="inbox">
        <input className="sdd" onChange={(e) => setsearch(e.target.value)} />

        <button className="searchbtn">Search</button>
      </div>
      <h5 className="soo">Get ready! Something really cool is coming!</h5>
      <h1 className="soon">Coming Soon</h1>

      <div className="cc container">
        {first
          .filter((e) => {
            if (search === "") {
              return "";
            } else if (
              e.data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
            ) {
              return e;
            }
          })
          .map((e, i) => (
            <>
              {/* <div className=" dddk row" key={i} >
                <div className=" imagepro col-lg-4">
                  <img className='imagesss' src={e.data.image} alt="..." />
                  <p></p>
                  <p></p>
                  <p></p>
                  <Link type='tel' className='linku'><div className='calld'><img src='https://img.icons8.com/ios-glyphs/512/ringer-volume.png' style={{ height: '30px' }} /> <h6 className='h6mobile'>{e.data.mobile}</h6></div></Link>
                  <Link><div className='location'><img style={{ height: '100%' }} src='https://img.icons8.com/ios/512/place-marker.png' /></div></Link>
                </div>
                <div className="ddds col-lg-6">
                  <div>
                    <h5 className="card-text">{e.data.title}</h5>
                    <div>Price : <h6>{e.data.price}</h6></div>
                    <details>
                      <summary>Details</summary>
                      <p>{e.data.details}</p>
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
              </div> */}

              <div className=" container">
                <div className=" ssf row">
                  <div className="col-lg-6">
                    <img className="imoo" src={e.data.image} />
                  </div>
                  <div className="imoos col-lg-6">
                    <h4>{e.data.title}</h4>
                    <p className="detai">{e.data.details}</p>
                    <div className=" imooo ">
                  <Link> <button> <h3><a className="anker" href={"tel:" + e.mobile}><h5>Call Now</h5></a></h3></button></Link>
                <Link to={`/services/${e.uid}`}  > <button>Best Deal</button></Link>
                    </div>
                    <div className=" ress">
                        {[...Array(5)].map((star, i) => {
                          const ratess = i + 1;
                          return (
                            <label>
                              <input
                                className="starin"
                                type="radio"
                                name="rating"
                                onClick={() => setrating(ratess)}
                              />
                              <FaStar
                                color={i++ < rating ? "orange" : "gray"}
                                className="star"
                                size={20}
                              />
                            </label>
                          );
                        })}
                        
                      </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Home;
