
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaStar } from "react-icons/fa";
  import { Link } from 'react-router-dom';
  import { db } from '../components/firebase';
  import React,{useState,useEffect} from 'react'

const Caterers = () => {
  const [data, setdata] = useState([])
  const [rating, setrating] = useState(null)

  useEffect(() => {
   db.collection('Category').doc('6qJKByoZ3ETb0q9gbkXc').collection('Caterers').onSnapshot(tab=>(
      setdata(tab.docs.map((e)=>(e.data())))
   ))
  }, [])
  return (
    <div>
    <Tabs>
              <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
                <Tab>Title 4</Tab>
              </TabList>

              <TabPanel>
                <h2>chetan</h2>
              </TabPanel>
              <TabPanel>
                <h2>heth</h2>
              </TabPanel>
              <TabPanel>
                <h2>rohit</h2>
              </TabPanel>
              <TabPanel>
                <h2>shubham</h2>
              </TabPanel>
            </Tabs> 

            <div className='cc container'>
            {data.map((e)=>(
  <div className=" container">
  <div className=" ssf row">
    <div className="col-lg-6">
      <img className="imoo" src={e.image} />
    </div>
    <div className="imoos col-lg-6">
      <h4>{e.title}</h4>
      <p className="detai">{e.details}</p>
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
))}
      </div>
    </div>
  )
}

export default Caterers
