import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar1 = ({email}) => {
    const navigate = useNavigate()
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
      <h2 className="btn btn-ghost text-xl">SMIT</h2>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li onClick={()=>navigate('/people')}>
          <p>Students</p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar1