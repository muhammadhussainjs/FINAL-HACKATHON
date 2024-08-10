import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/smitimage.png'

const Register = () => {

  const navigate = useNavigate()

  const nameref = useRef(null)
  const subjectref = useRef(null)
  const courseref = useRef(null)
  const roomref = useRef(null)
  const emailref = useRef(null)

  const Getobj = async (e) =>{
    
    e.preventDefault()

    const name = nameref.current.value
    const subject = subjectref.current.value
    const course = courseref.current.value
    const room = roomref.current.value
    const email = emailref.current.value
    console.log({email ,name , subject , course , room});

    try{
    const Data = {
      name : name,
      subject : subject,
      course : course,
      room : room,
      email : email
    }
    console.log(Data);

  
  const response = await axios.post('http://localhost:3001/users/register' , Data)
  console.log(response.data);
  if(response.data === 'please enter all sujession' ){
      alert('please fill out all of this')
      return

  }
  navigate('/admin')
  nameref.current.value = ''
  subjectref.current.value = ''
  courseref.current.value = ''
  roomref.current.value = ''

} catch (error) {
  console.error('Error uploading file or signing up user: ', error);
  }
}


  
   return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <img className='w-24 mx-auto ' src={image} alt="image"/>

          <h2 className="mt-1 text-[#0075b7] text-center text-1.5xl font-semibold  leading-9 tracking-tight ">
            Task Submission Portal
          </h2>
          <h2 className="mt-1 text-center text-[#73c54d] text-3xl font-semi-bold leading-9 tracking-tight">
            Sign Up
          </h2>
        </div>

        <div className="mt-3 sm:mx-auto  sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" >
          <div>
              <div className="flex items-center gap-36">
                <label htmlFor="name" className="block  text-sm font-medium leading-6 text-blue-500">
                  NAME
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="current-password"
                  required
                  ref={nameref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
                  </div>

                  <div>
              <div className="flex items-center gap-36">
                <label htmlFor="name" className="block  text-sm font-medium leading-6 text-blue-500">
                  EMAIL
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-password"
                  required
                  ref={emailref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
                  </div>
                 
            <div>
              <div className="flex items-center gap-36">
                <label htmlFor="email" className="block  text-sm font-medium leading-6 text-blue-500">
                  Subject
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="current-password"
                  required
                  ref={subjectref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

 
            <div>
              <div className="flex items-center gap-36">
                <label htmlFor="password" className="block  text-sm font-medium leading-6 text-blue-500">
                  Course
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="course"
                  name="course"
                  type="text"
                  autoComplete="current-password"
                  required
                  ref={courseref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
             <div>
               <div className="flex items-center justify-between"> 
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500">
                  Room
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="room"
                  name="room"
                  type="text"
                  autoComplete="current-password"
                  required
                  ref={roomref}
                  className="block w-[90%] outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

            <div>
              <button
                type="submit"
                onClick={Getobj}
                className="flex w-[90%] justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            already a user?{' '}
            <a href="#" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500" onClick={()=>{navigate('/login')}}>
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register