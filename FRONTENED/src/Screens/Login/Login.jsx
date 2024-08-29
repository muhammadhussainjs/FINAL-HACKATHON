
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import image from '../../assets/smitimage.png'

const Login = () => {
  
  const navigate = useNavigate()

  const emailref = useRef(null)
  const passwordref = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailref.current.value
    const password = passwordref.current.value
    console.log({ email, password });

    try {
      const Data = {
        email: email,
        password: password,
      }
      console.log(Data);

      const response = await axios.post('https://backened-with-mongodb-final-hackathon.vercel.app/users/login', Data)
      console.log(response.data);
      const {classLink , token} = response.data
      localStorage.setItem('classLink' , classLink)
      localStorage.setItem('token' , token)

      if (response.data.message === 'User not found!') {
        alert('Please check your email')
        return
      }
      if (response.data.message === 'Invalid Password') {
        alert('Please check your password')
        return
      }
      // if (response.data.email === 'ahmed@gmail.com') {
      //  navigate('/admin')
      //  return
      // }

      navigate('/admin')
    } catch (error) {
      console.error('Error logging in user: ', error);
      alert('Login failed');
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
          <h2 className="mt-1 text-center text-[#73c54d] text-3xl font-semi-bold leading-9 tracking-tight">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-blue-500 text-sm font-medium leading-6">
                EMAIL
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  ref={emailref}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500">
                  PASSWORD
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-500 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordref}
                  autoComplete="current-password"
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Dont have n account?{' '}
            <a href="#" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500" onClick={() => { navigate('/register'); }}>
              Sign up
            </a>
          </p>
        </div>
      </div>
        
    
    </>
  );
}

export default Login;
