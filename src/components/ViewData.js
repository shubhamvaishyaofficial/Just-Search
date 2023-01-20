import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../components/firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaStar } from "react-icons/fa";

const ViewData = () => {
  const parm = useParams();

  const [first, setfirst] = useState([]);
  const [rating, setrating] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    db.collection("services")
      .doc(parm.id)
      .onSnapshot((tap) => setfirst(tap.data()));
  }, []);

  useEffect(() => {
    db.collection("userweb").onSnapshot((tap) =>
      setdata(tap.docs.map((e) => e.data()))
    );
  }, []);

  return (
    <>
      <div>
        {data.map((e) => (
          <>
            <div className=" container">
              <div>
                <img className="logoavta" src={e.background} />
                <div className="boxxe">
                <div className="logoo">
                  <img className="logoop" src={first.image}></img>
                </div>
                </div>
                <h3 className="webtitle">{e.title}</h3>
              </div>

              <div className="wsr container text-center">
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
                    <div className="container">
                      <div className=" cardss row">
                        <div className=" imaggg col-lg-6">
                          <img
                            className="imagesd"
                            src={first.image}
                          />
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <h4>{first.title}</h4>
                          </div>
                          <br/>
                
                          <div>
                            <p>
                            {first.details}
                            </p>
                          </div>
                        
                          <div>
                            <h5>
                            {first.price}
                            </h5>
                          </div>
                          <button>Call</button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>{e.Reviews}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>{e.about}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      <a target="_blank" href={"tel:" + e.numb}>
                        {e.numb}
                      </a>
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      <a target="_blank" href={e.link}>
                        {e.link}
                      </a>
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewData;
