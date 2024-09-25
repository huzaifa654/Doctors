import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from "../src/pgaes/Home/Home"
import Docteres from "../src/pgaes/Doctores/Doctores"
import Login from "../src/pgaes/Login/Login"
import About from "../src/pgaes/About/About"
import Contact from "../src/pgaes/Contact/Contact"
import MyProfile from "../src/pgaes/MyProfile/MyProfile"
import MyAppointments from "../src/pgaes/MyAppointments/MyAppointments"
import Appointment from "../src/pgaes/Appointment/Appointment"
import NavBar from './Components/NavBar/NavBar'
import DoctorDetail from "../src/pgaes/DoctorDetail/DoctorDetail"
import Footer from './Components/Footer/Footer'






export default function App() {
  return (
    <div className='mx-4 sm:[10%]' >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docters' element={<Docteres />} />
        <Route path='/docters:speciality' element={<Docteres />} />
        <Route path='/doctorDetail' element={<DoctorDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-appointments:docId' element={<Appointment />} />
      </Routes>
      <Footer />
      <div className='lastPara'>
        <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  )
}
