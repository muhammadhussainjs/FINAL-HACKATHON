import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'
import Homes from '../../Screens/Home/Home'


const Routerconfigs = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Homes/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfigs