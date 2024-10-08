import React, { useRef} from 'react';
import { useLocation } from 'react-router-dom';
import image from '../../assets/smitimage.png'
import axios from 'axios';
import Navbar1 from '../../Components/Navbar1/Navbar1';

const StudentSubmit = () => {
  // Get the location object
  const urlRef = useRef('')
  const location = useLocation();

  // Access the assignment data passed from the previous page
  const { item , user } = location.state || {};
  console.log(item);
  console.log(user);
  const handleSubmit = async (e)=>{
    e.preventDefault()
      const title = item.title
      const description = item.description
      const link = urlRef.current.value
      const teacherId = item.teacherId
      const email = user.email
      const name = user.name
      
    const Data = {
        title: title,
        description: description,
        link: link,
        teacherId : teacherId,
        email:email,
        name:name
    }
    console.log(Data);
    
try {
    const response =  await axios.post('https://backened-with-mongodb-final-hackathon.vercel.app/assignmentsubmit/assignmentsubmits' , Data)
 console.log(response);
 alert('Assignment submitted successfully')
 urlRef.current.value = ''
    
    
} catch (error) {
    console.log(error);
    
    
}
    
  }

  return (
    <>
    <Navbar1 showadmin = {false} showstudents = {false}/>
    <div className="card bg-base-300  justify-center flex shadow-xl mt-5">
      
      {user ? (
       
        <div className="card-body pb-0 w-[90%]">
            <h2 className="card-title">NAME : {user.name}</h2>
            <h2>EMAIL : {user.email}</h2>
            
            
          </div>
       
      ) : (
        <p>No user  available.</p>
      )}
      {item ? (
        
        <div className="card-body pt-1">
            <h2>Title : {item.title}</h2>
            <h2>Description : {item.description}</h2>
            <h2>Posted Date : {item.createdAt}</h2>
            
          </div>
       
      ) : (
        <p>No assignment data available.</p>
      )}
    </div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">

  <img className='w-24 mx-auto ' src={image} alt="image"/>

  <h2 className="mt-1 text-[#0075b7] text-center text-1.5xl font-semibold  leading-9 tracking-tight ">
    Task Submission Portal
  </h2>
 
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form className="space-y-6" onSubmit={handleSubmit} >
    <div>
      <label htmlFor="url" className="block text-blue-500 text-sm font-medium leading-6">
        LINK
      </label>
      <div>
        <input
          id="url"
          name="url"
      ref={urlRef}
          type="text"
          autoComplete="email"
          required
          className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
        />
      </div>
    </div>

    
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        SUBMIT
      </button>
    </div>
  </form>

 
</div>
</div>
</>



  );
};

export default StudentSubmit;
