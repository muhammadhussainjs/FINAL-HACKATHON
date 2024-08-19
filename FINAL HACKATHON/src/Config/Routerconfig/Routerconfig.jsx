import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'
import Admin from '../../Screens/Admin/Admin'
import Students from '../../Screens/Students/Students'
import Homes from '../../Screens/Homes/Homes'
import Student from '../../Screens/Student/Student'
import StudentSubmit from '../../Screens/StudentSubmit/StudentSubmit'
import Peoples from '../../Screens/Peoples/Peoples'


const Routerconfigs = () => {
  return (

    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Homes/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path='students/:uniqueIdentifier' element={<Students/>}/>
        <Route path='student' element={<Student/>}/>
        <Route path='studentsubmit' element={<StudentSubmit/>}/>
        <Route path='people' element={<Peoples/>}/>
        <Route path="*" element={<Homes />} /> {/* Fallback route */}
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfigs