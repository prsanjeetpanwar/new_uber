import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div
      className="h-screen bg-bottom  flex flex-col justify-between pt-8 w-full"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2021/11/20/05/15/car-6810885_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="bg-white pb-8 py-5 px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link
        to={'/user-login'}
        
        className="w-full  flex items-center justify-center
         bg-black text-white py-3 rounded-lg mt-4">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
