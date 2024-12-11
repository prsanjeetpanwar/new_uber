import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../../context/captain.context'


const CaptainLogin = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState(''); 
  const [errorMessage, setErrorMessage] = useState('');


  const {captain,setCaptain}=useContext(CaptainDataContext)
  const navigate=useNavigate();


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const captain={
      email:email,
      password:password
    }
    try {
      const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/captain/login`,captain)
    if(response.status===200 && response.data){
      setCaptain(response.data.captain);
      localStorage.setItem('token',response.data.token)
      setErrorMessage('')
      navigate('/')
      
    }
    setEmail('');
    setPassword('');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      setErrorMessage(errorMsg);
    }

  
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div className=''>
      <div className="flex flex-col items-center mb-12">
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
          />
        </div>
         <form action=""
         onSubmit={handleSubmit}
         >
          <h3 className='text-xl mb-2'>What's your email</h3>
          <input type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          className='bg-[#eeeeee] rounded px-4
          py-2 border w-full text-lg placeholder:text-base
          '
          placeholder='email@example.com'
          />
          <h3 className='text-xl my-2'>Enter Password</h3>
          <input type="password"
          required
          className='bg-[#eeeeee] rounded px-4
           py-2 border w-full text-lg placeholder:text-base
          '
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button className='bg-black font-semibold
          text-white rounded-lg px-4 py-2 border text-lg w-full mt-16
          '>Login</button>
         </form>
         <p className=" flex font-semibold mt-2">
          Don't have an account?
          <Link
            to="/captain-signUp"
            className="ml-2   underline font-medium text-blue-400 hover:text-blue-600"
          >
            Create an Account
          </Link>
        </p>
      </div>
      <div className="mt-auto">
        <Link to="/user-login">
          <button
            className="bg-yellow-300 font-semibold text-white rounded-lg px-4 py-2 border w-full text-lg mt-6 hover:bg-yellow-400/80 cursor-pointer"
          >
            Sign in as User
          </button>
        </Link>
      </div>
    
    </div>
  )
}

export default CaptainLogin
