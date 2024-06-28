import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='register'>Register</Link></li>
        <li><Link to='home'>Home</Link></li>
    </ul>
    </>
  )
}

export default Navbar