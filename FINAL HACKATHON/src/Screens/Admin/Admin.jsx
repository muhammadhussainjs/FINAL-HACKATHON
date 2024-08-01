import React, { useRef } from 'react'
import image from '../../assets/smitimage.png'
import axios from 'axios'



const Admin = () => {

  const titleref = useRef('')
  const descriptionref = useRef('')

  
  async function handleSubmit(e){
      e.preventDefault()
    
      const description = descriptionref.current.value
      const title = titleref.current.value
try {
  
  const Data = {
    title:title,
    description:description
  }

 const response = await axios.post('http://localhost:3001/admins/admin' , Data)
console.log('admin data' , response.data);


} catch (error) {
  console.log('error ' , error);
  
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
            TASK SUBMIT
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-blue-500 text-sm font-medium leading-6">
                TITLE
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                ref={titleref}
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500">
                  DESCRIPTION
                </label>
             
              </div>
              <div className="mt-2">
                <textarea
                  id="password"
                  name="password"
                  type="text"
              ref={descriptionref}
                  autoComplete="current-password"
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </>
  )
}

export default Admin