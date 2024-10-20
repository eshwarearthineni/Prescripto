import React from 'react'
import './index.css';  // or './App.css' depending on where Tailwind is configured
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login';
import About from './pages/About';
import Myprofile from './pages/Myprofile';
import Myappointment from './pages/Myappointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Doctors/' element={<Doctors/>}/>
        <Route path='Doctors/:speciality' element={<Doctors/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='About/' element={<About/>}/>
        <Route path='my-profile/' element={<Myprofile/>}/>
        <Route path='my-appointment/' element={<Myappointment/>}/>
        <Route path='appointment/:docId/' element={<Appointment/>}/>

      </Routes>
    </div>
  )
}

export default App