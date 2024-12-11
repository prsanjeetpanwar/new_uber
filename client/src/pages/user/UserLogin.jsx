import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/user.context';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(UserDataContext); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/user/login`,
        userData
      );

      if (response.status === 200 && response.data) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        setErrorMessage(''); 
        navigate('/user-home');
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-12">
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="ram@gmail.com"
          />
          <h3 className="text-xl my-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-black font-semibold text-white 
            rounded-lg px-4 py-2 border w-full text-lg mt-16 hover:bg-black/80 cursor-pointer"
          >
            Login
          </button>
        </form>

        {errorMessage && <p className="mt-4 text-red-500 font-semibold">{errorMessage}</p>}

        <p className="mt-4 flex font-semibold">
          Don't have an account?
          <Link
            to="/user-signUp"
            className="ml-2 underline font-medium text-blue-400 hover:text-blue-600"
          >
            Create an Account
          </Link>
        </p>
      </div>

      <div className="mt-auto">
        <Link to="/captain-login">
          <button
            className="bg-green-500 font-semibold text-white rounded-lg px-4 py-2 border w-full text-lg mt-6 hover:bg-green-700/80 cursor-pointer"
          >
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
