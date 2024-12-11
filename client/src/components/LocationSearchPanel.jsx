import React from 'react';

const LocationSearchPanel = (props) => {
 
 console.log(props)
    const locations = [
    "24N Near Hero Chowk, Gautam City, New York, USA",
    "16B Central Park Avenue, Manhattan, New York, USA",
    "48D Elm Street, Downtown, Los Angeles, USA",
    "221B Baker Street, London, UK",
    "90F Victoria Road, Central District, Hong Kong",
    "350 King Street West, Toronto, Canada",
    "78A Mount Road, Chennai, India",
    "29C Market Street, Melbourne, Australia",
  ];

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else if (activeField === 'destination') {
      setDestination(suggestion);
    }
    // Uncomment these if needed
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {locations.map((location, index) => (
        <div 
          key={index} 
          onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} 
          className='flex border bg-gray-50 active:border-black active:border-2 px-3 rounded-xl items-center my-4 justify-start cursor-pointer'>
          <h2 className="bg-[#eee] p-4 mr-4 rounded-full flex items-center justify-center w-10 h-10">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className='text-md font-medium font'>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
