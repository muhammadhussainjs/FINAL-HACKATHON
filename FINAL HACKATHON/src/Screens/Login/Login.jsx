// import React, { useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'



// const Login = () => {
  
//   const navigate = useNavigate()

//   const emailref = useRef(null)
//   const passwordref = useRef(null)

//   const Getobj = async (e) =>{
    
//     e.preventDefault()

//     const email = emailref.current.value
//     const password = passwordref.current.value
//     console.log({ email , password});

//     try{
//     const Data = {
//       email : email,
//       password : password,
//     }
//     console.log(Data);


  
//   const response = await axios.post('http://localhost:3001/users/login' , Data)
//   console.log(response.data);
//   if(response.data.message === 'User not found' ){
//       alert('please check your email')
//       return
//   }
//   if(response.data.message === 'Invalid Password' ){
//       alert('please check your password')
//       return

//   }
//   navigate('/')

// } catch (error) {
//   console.error('Error uploading file or signing up user: ', error);
//   }}


//   return (
//     <>
//       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   ref={emailref}
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   ref={passwordref}
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 onClick={Getobj}
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500" onClick={()=>{navigate('/register')}}>
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

  























import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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

      const response = await axios.post('http://localhost:3001/users/login', Data)
      console.log(response.data);

      if (response.data.message === 'User not found!') {
        alert('Please check your email')
        return
      }
      if (response.data.message === 'Invalid Password') {
        alert('Please check your password')
        return
      }
      navigate('/')
    } catch (error) {
      console.error('Error logging in user: ', error);
      alert('Login failed');
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  ref={emailref}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordref}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={() => { navigate('/register'); }}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
