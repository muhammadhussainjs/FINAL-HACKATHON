import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/smitimage.png';
import Navbar from '../../Components/Navbar1/Navbar1';

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); 
  const [assignment, setAssignment] = useState([]); 

  useEffect(() => {
    async function getEmail() {
      
      try {
        const response = await axios.get('https://backened-with-mongodb-final-hackathon.vercel.app/users/user' , {
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
        const response = await axios.get('https://backened-with-mongodb-final-hackathon.vercel.app/assignments/assignments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log(response.data.data);
        
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

      const response = await axios.post('https://backened-with-mongodb-final-hackathon.vercel.app/assignments/assignments', Data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('assignments data', response.data);
      alert('Assignment Post Successfully')
      titleref.current.value = ''
      descriptionref.current.value = ''
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
 <Navbar showadmin = {false} />


      {data.map((item, index) => {

        return <div className='flex justify-center'> 

        <div className='card bg-base-300 w-[90%] shadow-xl mt-5'>
          

        <div className="card-body pl-6 break-words">
        <h2 className="uppercase"><strong>NAME :</strong> {item.name}</h2>
<h2 className="uppercase"><strong>SUBJECT :</strong> {item.subject}</h2>
<h2 className="uppercase"><strong>BATCH :</strong> {item.batch}</h2>
<h2><strong>SHARE THIS LINK FOR STUDENTS:</strong> <u className=' text-blue-500'>{item.classLink}</u></h2>

          </div>
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
          <form className="space-y-6"  onSubmit={handleSubmit}>
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
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 font-serif"
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

      {assignment.map((item, index) => {
        return <div className='flex justify-center'>
          <div key={index} className=" card bg-base-300 w-[80%] md:w-[50%] lg:w-[40%] sm:w-[60%] mb-5  shadow-xl mt-5">
        <div className="card-body pl-6">
            <h2 className=' text-xl break-words'><strong>TITLE</strong> {item.title}</h2>
            <h2 className=' break-words text-xl'><strong>DESCRIPTION</strong> {item.description}</h2>
            <h2 className=' break-words text-xl'><strong>CREATEDAT</strong> {item.createdAt}</h2>
            
          </div>
        </div>
        </div>
      })} 
      
    </>
  );
};

export default Admin;
