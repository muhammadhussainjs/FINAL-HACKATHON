import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/smitimage.png'
import axios from 'axios'

const Student = () => {
  const navigate = useNavigate()
    const urlRef = useState(null)
    const emailRef = useState(null)
    const passwordRef = useState(null)


    const Getobj = async (e) =>{
    
      e.preventDefault()
  
      
      const url = urlRef.current.value
      const email = emailRef.current.value
      const password = passwordRef.current.value
      console.log({url , email , password});
  
      const Data = {
        email,
        password
      }
      console.log(Data);
      
      try{
    
    const response = await axios.post('https://backened-with-mongodb-final-hackathon.vercel.app/studentusers/login' , Data)
    console.log(response.data);
    console.log(response.status);
    console.log(response.data.message);
    const { token} = response.data
      localStorage.setItem('studenttoken' , token)
    if (response.data.message === 'Invalid Password') {
      alert('Please Enter Correct Password')
     return
 }
    if (response.data.message === 'User logged in successfully!') {
      alert('User logged in successfully!')
      
      
      if(url){
        
        window.location.href = url
      }
      else {
        alert('URL is required for redirection.');
      }
    }
   else {
      alert(response.data.message);
  }
  } catch (error) {
  console.error('Error signing up user: ', error);
  alert('An error occurred during registration. Please try again.');
  }
  }
  


   
  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <img className='w-24 mx-auto ' src={image} alt="image"/>

        <h2 className="mt-1 text-[#0075b7] text-center text-1.5xl font-semibold  leading-9 tracking-tight ">
          Task Submission Portal
        </h2>
       
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={Getobj} >

       
              <div>
                <label htmlFor="email" className="block  text-sm font-medium leading-6 text-blue-500">
                  EMAIL
                </label>
                
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-password"
                  required
                  ref={emailRef}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
              </div>
                  </div>
              <div>
                <label htmlFor="password" className="block text-blue-500 text-sm font-medium leading-6">
                  PASSWORD
                </label>
                
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passwordRef}
                  className="block outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                  />
                  </div>
              </div>



          <div>
            <label htmlFor="url" className="block text-blue-500 text-sm font-medium leading-6">
              URL
            </label>
            <div>
              <input
                id="url"
                name="url"
            ref={urlRef}
                type="text"
                autoComplete="email"
                required
                className="block  outline-none w-[90%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              className="flex w-[90%] justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              DONE
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-sm text-gray-500">
        Dont have n account?{' '}
            <a href="#" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500" onClick={()=>{navigate('/studentregister')}}>
              Sign up
            </a>
          </p>

       
      </div>
    </div>
      
  
  </>
  )
}

export default Student