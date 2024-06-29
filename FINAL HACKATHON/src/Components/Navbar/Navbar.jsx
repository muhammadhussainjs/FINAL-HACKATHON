import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate = useNavigate()


  return (
    <>
   <div className="navbar bg-slate-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Home</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
      <li>
          <ul className="font-semibold text-xl rounded-t-none">
            <li onClick={()=>{navigate('/login')}}><a>Sign in</a></li>
          </ul>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar