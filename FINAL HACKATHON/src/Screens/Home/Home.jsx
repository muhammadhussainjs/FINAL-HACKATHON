import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'

const Home = () => {

  const [data , setData] = useState('')

  useEffect( async ()=>{
    try{

      const response = await axios.get('http://localhost:3001/admins/')
      console.log('admin data' , response.data.data);
      setData(response.data.data)
      console.log(data);

    
    
    
    } catch (error) {
      console.log('error ' , error);
      
    }

  } , [])
  return (
    <Navbar/>
    
  )
}

export default Home