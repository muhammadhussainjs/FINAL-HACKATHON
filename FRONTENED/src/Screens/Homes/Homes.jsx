import React from 'react'
import smit from '../../assets/smitimage.png';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../../Components/Navbar1/Navbar1';


const Homes = () => {
    const navigate = useNavigate()

    const gotoRegister = ()=>{
        navigate('register')

    }

    const gotoStudent = ()=>{
        navigate('/student')
    }

  return (
    <>
    <Navbar1 showadmin = {false} showstudents = {false} />
   
<div className='flex justify-center mt-28'>
    <div className="card card-compact bg-base-100 w-80 sm:w-96 shadow-xl items-center">
  <figure>
    <img
      src={smit}
      alt="Shoes" />
  </figure>
  <div className="card-body flex flex-row">
    
    <div className="card-actions" onClick={gotoStudent}>
      <button className="btn btn-primary">JOIN CLASS</button>
    </div>
    <div className="card-actions" onClick={gotoRegister}>
      <button className="btn btn-primary">CREATE CLASS</button>
    </div>
  </div>
</div>
    </div>
      </>
  )
}

export default Homes