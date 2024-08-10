import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'
import Home from '../../Screens/Home/Home'
import Admin from '../../Screens/Admin/Admin'
import Students from '../../Screens/Students/Students'
import Homes from '../../Screens/Homes/Homes'


const Routerconfigs = () => {
  return (

    <BrowserRouter>
    
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/" element={<Homes/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path='students/:uniqueIdentifier' element={<Students/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfigs