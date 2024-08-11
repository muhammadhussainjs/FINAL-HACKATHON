import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/smitimage.png';
import Navbar from '../../Components/Navbar1/Navbar1';

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Initialize with an empty array
  const [assignment, setAssignment] = useState([]); // Initialize with an empty array

  useEffect(() => {
    async function getEmail() {
      
      try {
        const response = await axios.get('http://localhost:3001/users/user' , {
          headers: { Authorization: `Bearer ${token}`}
        });
        console.log('assignments data', response.data);
        setData(response.data.data);
      } catch (error) {
        console.log('error', error);
      }
    }
    getEmail();
  }, []);
  useEffect(() => {
    async function fetchAssignments() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3001/assignments/assignments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        
        setAssignment(response.data.data);
      } catch (error) {
        console.log('Error fetching assignments:', error);
      }
    }

    fetchAssignments();
    const interval = setInterval(fetchAssignments, 5000);

    return () => clearInterval(interval);
  }, []);

  



  const classLink = localStorage.getItem('classLink');
  const token = localStorage.getItem('token');
  console.log(classLink);
  console.log(token);
  
  if (!classLink) {
    navigate('/');
  }

  const titleref = useRef('');
  const descriptionref = useRef('');
  
  async function handleSubmit(e) {
    e.preventDefault();

    const description = descriptionref.current.value;
    const title = titleref.current.value;

    try {
      const Data = { 
        title: title,
         description : description
        };

      const response = await axios.post('http://localhost:3001/assignments/assignments', Data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('assignments data', response.data);
      alert('assignment post successfully')
      titleref.current.value = ''
      descriptionref.current.value = ''
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
 <Navbar />


      {data.map((item, index) => {
        return <div key={index} className="card bg-base-300 w-full shadow-xl mt-5">
        <div className="card-body">
            <h2 className="card-title">NAME : {item.name}</h2>
            <h2>SUBJECT : {item.subject}</h2>
            <h2>BATCH : {item.batch}</h2>
            <h2>SHARE THIS LINK FOR STUDENTS: {item.classLink}</h2>
          </div>
        </div>
      })} 
      
    

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-24 mx-auto" src={image} alt="SMIT Logo" />
          <h2 className="mt-1 text-[#0075b7] text-center text-1.5xl font-semibold leading-9 tracking-tight">
            Task Submission Portal
          </h2>
          <h2 className="mt-1 text-center text-[#73c54d] text-3xl font-semi-bold leading-9 tracking-tight">
            TASK SUBMIT
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-blue-500 text-sm font-medium leading-6">
                TITLE
              </label>
              <div>
                <input
                  id="title"
                  name="title"
                  ref={titleref}
                  type="text"
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-blue-500">
                DESCRIPTION
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  ref={descriptionref}
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

      {assignment.map((item, index) => {
        return <div key={index} className="card bg-base-300 w-full shadow-xl mt-5 mb-10">
        <div className="card-body">
            <h2 className="card-title">TITLE : {item.title}</h2>
            <h2>DESCRIPTION : {item.description}</h2>
            
          </div>
        </div>
      })} 
      
    </>
  );
};

export default Admin;
