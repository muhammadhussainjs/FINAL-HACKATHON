import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Peoples = () => {
  const [data , setData] = useState([])
  const token = localStorage.getItem('token');
  console.log(token);
  

  useEffect(()=>{
   async function getStudent(){
    try {
      const response = await axios.get('http://localhost:3001/assignmentsubmit/assignmentsubmit' , {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response.data.data);
      setData(response.data.data)
      
    } catch (error) {
      console.log(error);
      
      
    }

    }
    getStudent()
  },[])


  return (
    <>
    {data.map((item , index)=>{
      return <div key={index} className="card bg-base-300 w-full shadow-xl mt-5">
      <div className="card-body">
          <h2 className="card-title">CreatedAt : {item.createdAt}</h2>
          <h2 className="card-title">Title : {item.title}</h2>
          <h2>Description : {item.description}</h2>
          <p className="text-blue-500"><a href={item.link}>Link : {item.link}</a></p>
          
        </div>
      </div>

    })}
    
    </>
  )
}

export default Peoples