import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AirTickets from "./categorys/AirTickets";
import AutoMobile from "./categorys/AutoMobile";
import BillRecharge from "./categorys/BillRecharge";
import BookHotel from "./categorys/BookHotel";
import Caterers from "./categorys/Caterers";
import DanceMusic from "./categorys/DanceMusic";
import Decoration from "./categorys/Decoration";
import Designer from "./categorys/Designer";
import Doctor from "./categorys/Doctor";
import Education from "./categorys/Education";
import Emergency from "./categorys/Emergency";
import Fitness from "./categorys/Fitness";
import Flowers from "./categorys/Flowers";
import Hospitals from "./categorys/Hospitals";
import HouseKeeping from "./categorys/HouseKeeping";
import Jewellery from "./categorys/Jewellery";
import Jobs from "./categorys/Jobs";
import Labs from "./categorys/Labs";
import Loans from "./categorys/Loans";
import Programming from "./categorys/Programming";
import RealEstate from "./categorys/RealEstate";
import Sports from "./categorys/Sports";
import Transporters from "./categorys/Transporters";
import Wedding from "./categorys/Wedding";
import CategoryHome from "./components/CategoryHome";
import { auth } from "./components/firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import AddProduct from "./Database/AddProduct";
import Dashboard from "./Database/Dashboard";
import Leads from "./Database/Leads";
import Setting from "./Database/Setting";
import TotalProduct from "./Database/TotalProduct";
import { onAuthStateChanged } from "firebase/auth";
import UserWeb from "./components/UserWeb";
import Footer from "./components/Footer";
import ViewData from "./components/ViewData";


function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {user ? (
            <>
              <Route path="/services/:id" element={<ViewData />} />
             

              <Route path="/" element={<Home />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/TotalProduct" element={<TotalProduct />} />
              <Route path="/Leads" element={<Leads />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/CategoryHome" element={<CategoryHome />} />

              <Route path="/services/1" element={<AirTickets />} />
              <Route path="/services/2" element={<AutoMobile />} />
              <Route path="/services/3" element={<BookHotel />} />
              <Route path="/services/4" element={<Flowers />} />
              <Route path="/services/5" element={<Jewellery />} />
              <Route path="/services/6" element={<Caterers />} />
              <Route path="/services/7" element={<Doctor />} />
              <Route path="/services/8" element={<Education />} />
              <Route path="/services/9" element={<Fitness />} />
              <Route path="/services/10" element={<Hospitals />} />
              <Route path="/services/11" element={<Transporters />} />
              <Route path="/services/12" element={<DanceMusic />} />
              <Route path="/services/13" element={<Jobs />} />
              <Route path="/services/14" element={<Sports />} />
              <Route path="/services/15" element={<Decoration />} />
              <Route path="/services/16" element={<HouseKeeping />} />
              <Route path="/services/17" element={<Designer />} />
              <Route path="/services/18" element={<RealEstate />} />
              <Route path="/services/19" element={<Loans />} />
              <Route path="/services/20" element={<BillRecharge />} />
              <Route path="/services/21" element={<Labs />} />
              <Route path="/services/22" element={<Emergency />} />
              <Route path="/services/23" element={<Programming />} />
              <Route path="/services/24" element={<Wedding />} />
              <Route path="/web" element={<UserWeb />} />
            </>
          ) : (
            <>
              <Route path="/services/:id" element={<ViewData />} />

            
              

              <Route path="/" element={<Home />} />
              <Route path="/services/1" element={<AirTickets />} />
              <Route path="/services/2" element={<AutoMobile />} />
              <Route path="/services/3" element={<BookHotel />} />
              <Route path="/services/4" element={<Flowers />} />
              <Route path="/services/5" element={<Jewellery />} />
              <Route path="/services/6" element={<Caterers />} />
              <Route path="/services/7" element={<Doctor />} />
              <Route path="/services/8" element={<Education />} />
              <Route path="/services/9" element={<Fitness />} />
              <Route path="/services/10" element={<Hospitals />} />
              <Route path="/services/11" element={<Transporters />} />
              <Route path="/services/12" element={<DanceMusic />} />
              <Route path="/services/13" element={<Jobs />} />
              <Route path="/services/14" element={<Sports />} />
              <Route path="/services/15" element={<Decoration />} />
              <Route path="/services/16" element={<HouseKeeping />} />
              <Route path="/services/17" element={<Designer />} />
              <Route path="/services/18" element={<RealEstate />} />
              <Route path="/services/19" element={<Loans />} />
              <Route path="/services/20" element={<BillRecharge />} />
              <Route path="/services/21" element={<Labs />} />
              <Route path="/services/22" element={<Emergency />} />
              <Route path="/services/23" element={<Programming />} />
              <Route path="/services/24" element={<Wedding />} />

              <Route path="/CategoryHome" element={<CategoryHome />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
