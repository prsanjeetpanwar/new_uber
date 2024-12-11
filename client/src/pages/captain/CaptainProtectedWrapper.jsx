import React,{useContext,useEffect,useState} from "react";
import { CaptainDataContext } from "../../context/captain.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CaptainProtectedWrapper=({children})=>{
const token=localStorage.getItem('token')
const navigate=useNavigate()
const {captain,setCaptain}=useContext(CaptainDataContext)
const [isLoading,SetIsLoading]=useState(true)

useEffect(()=>{
    if(!token){
  navigate('/captain-login')
}
axios.get(`${import.meta.env.VITE_SERVER_URL}/captain/profile`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
}).then(res=>{
    if(res.status===200){
        setCaptain(res.data.captain)
        SetIsLoading(false)
    }
}).catch(err=>{
    console.error(err)
    localStorage.removeItem('token')
    navigate('/captain-login')
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
export default CaptainProtectedWrapper