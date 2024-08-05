import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/smitimage.png'

const Register = () => {

  const navigate = useNavigate()

  const nameref = useRef(null)
  const emailref = useRef(null)
  const passwordref = useRef(null)
  const confirmpasswordref = useRef(null)

  const Getobj = async (e) =>{
    
    e.preventDefault()

    const fullName = nameref.current.value
    const email = emailref.current.value
    const password = passwordref.current.value
    const confirmpassword = confirmpasswordref.current.value
    console.log({fullName , email , password , confirmpassword});

    try{
    const Data = {
      fullName : fullName,
      email : email,
      password : password,
      // confirmpassword : confirmpassword
    }
    console.log(Data);
if(password !== confirmpassword){
  alert('please enter correct password')
  return
}

  
  const response = await axios.post('http://localhost:3001/users/register' , Data)
  console.log(response.data);
  if(response.data === 'please enter correct email' ){
      alert('please check it your email and password')
      return

  }
  navigate('/login')

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
                  type="name"
                  autoComplete="current-password"
                  required
                  ref={nameref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
                  </div>
                 
            <div>
              <div className="flex items-center gap-36">
                <label htmlFor="email" className="block  text-sm font-medium leading-6 text-blue-500">
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
                <label htmlFor="password" className="block  text-sm font-medium leading-6 text-blue-500">
                  PASSWORD
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passwordref}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
             <div>
               <div className="flex items-center justify-between"> 
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500">
                  CONFIRM PASSWORD
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={confirmpasswordref}
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