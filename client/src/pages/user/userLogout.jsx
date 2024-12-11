import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const token =localStorage.getItem('token')
    const navigate=useNavigate()
    axios.get(`${import.meta.env.VITE_SERVER_URL}/user/logout`,{headers:{Authorization:`Bearer ${token}`}}).then(
        res=>{
            if(res.status===200){
                localStorage.removeItem('token')
                navigate('/user-login')
            }
        }
    ).catch(err=>console.log(err))
  return (
    <div>
      User Logout
    </div>
  )
}

export default UserLogout
