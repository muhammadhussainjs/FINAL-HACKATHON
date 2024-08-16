import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar1 = ({email , showstudents=true, showadmin = true }) => {
    const navigate = useNavigate()
  return (
    <div className="navbar bg-base-300 text-neutral-content">
    <div className="flex-1">
      <h2 className="text-xl text-black">SMIT</h2>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li onClick={()=>navigate('/people')}>
         {showstudents ? <h2 className='text-black text-xl '>STUDENTS</h2>:
         null}
        </li>
        <li onClick={()=>navigate('/ADMIN')}>
         {showadmin ? <h2 className='text-black text-xl '>ADMIN</h2>:
         null}
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar1