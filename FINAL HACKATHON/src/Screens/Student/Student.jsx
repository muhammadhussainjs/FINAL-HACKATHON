import React, { useState } from 'react'
import image from '../../assets/smitimage.png'

const Student = () => {
    const urlRef = useState(null)


    function handleSubmit(e){
        e.preventDefault()
        const url = urlRef.current.value
        if(url){

            window.location.href = url
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
        <form className="space-y-6" onSubmit={handleSubmit} >
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
                className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              DONE
            </button>
          </div>
        </form>

       
      </div>
    </div>
      
  
  </>
  )
}

export default Student