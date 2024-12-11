import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div className=''
    onClick={()=>{
        props.setVehicleFound(false)
    }}
    >
           <h5   className='p-1 text-center absolute top-0 w-[93%]'> <i className="ri-arrow-down-wide-line text-3xl text-gray-400 "></i></h5>
           <h3 className='text-2xl font-semibold mb-5'>Looking for a driver</h3>

      <div className='flex justify-between gap-2 flex-col items-center'>
      <img  className="h-20" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div

           className='w-full mt-5 '>
        <div 

        className='flex  items-center gap-5 p-3 border-b-2  '>
            <i  className="text-lg  ri-map-pin-user-fill"></i>
            <div  className=''>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 to-gray-600 '>Hostan house ,Bostan</p>
            </div>

        </div>
        <div className='flex  items-center gap-5 p-3 border-b-2  '>
        <i className="text-lg  ri-map-pin-2-fill"></i>
            <div  className=''>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 to-gray-600 '>Hostan house ,Bostan</p>
            </div>
        </div>
        <div className='flex  items-center gap-5 p-3  '>
        <i className="text-lg  ri-currency-line"></i>
            <div  className=''>
                <h3 className='text-lg font-medium'>₹194.3</h3>
                <p className='text-sm -mt-1 to-gray-600 '>Case</p>
            </div>
        </div>
          </div>
            
      </div>
    </div>
  )
}

export default LookingForDriver
