import React,{useContext,useEffect,useState} from "react";
import { UserDataContext } from "../../context/user.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserProtectedWrapper=({children})=>{
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    const {user,setUser}=useContext(UserDataContext)
    const [isLoading,SetIsLoading]=useState(true)
    
    useEffect(()=>{
        if(!token){
            navigate('/user-login')
        }
        axios.get(`${import.meta.env.VITE_SERVER_URL}/user/profile`,{
            headers:
            {Authorization:`Bearer ${token}`}
        }).then(res=>{
            if(res.status===200){
                setUser(res.data.user)
                SetIsLoading(false)
            }
        }).catch(err=>{
            console.error(err)
            localStorage.removeItem('token')
            navigate('/user-login')

        })
    },[token])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <>
            {children}
        </>
    )


}

export default UserProtectedWrapper