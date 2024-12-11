import React,{useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../../context/captain.context'
import axios from 'axios'
const CaptainSignUp = () => {
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const navigate=useNavigate()
  const {captain,setCaptain}=useContext(CaptainDataContext);

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    try {
 const response=await axios.post(`${import.meta.env.VITE_SERVER_URL}/captain/register`,captainData)
 if(response.status===201 && response.data){
  setCaptain(response.data.captain);
  localStorage.setItem('token',response.data.token);
  navigate('/');
}
setfirstname('');
setlastname('');
setemail('');
setpassword('');
setVehicleColor('');
setVehiclePlate('');
setVehicleCapacity('');
setVehicleType('');

    }
    catch(error){
      console.error('Error during registration:',error);
  }
  }


  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <div className='flex flex-col items-center mb-12'>
        <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <h3 className='text-xl mb-2 font-medium'>What's our captain name</h3>
          <div  className='flex gap-4 my-3'>
            <input
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            type="text"
            placeholder='First Name'
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <input 
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            type='text'
            placeholder='Last Name'
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            
            />
          </div>
          <h3 className='text-lg font-medium my-3'>What's you email</h3>
          <input
           value={email}
           onChange={(e) => setemail(e.target.value)}
           type="email"
          required
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base
          '
          placeholder='email@example.com'
           />
           <h3 className='text-lg font-medium my-3'>Enter Password</h3>
          <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          
          type="password"
          required
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          placeholder='password'
          />
          <h3 className='text-lg font-medium my-3'>Vehicle Information</h3>
          <div className='flex gap-4 my-3'>
            <input
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
           type="text"
            className='bg-[#eeeeee] rounded px-4 py-2 
            border w-full text-lg placeholder:text-base'
            placeholder='Vehicle Color'
            required
            />
            <input 
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            type="text"
            required
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='Vehicle Plate'

            />
          
          </div>
          <div className='flex gap-4 my-3'>
          <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}


              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
            
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button  className='bg-black font-semibold text-white rounded-lg
           px-4 py-2 border text-lg w-full mt-6'>Create Account</button>
        </form>
        <p className='ml-2 mt-1  font-medium '>Already have a account? <Link to='/captain-login' className='text-blue-600 underline'>Login here</Link></p>

      </div>
      <div>
        <p className='text-[10px] mt-2 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignUp
