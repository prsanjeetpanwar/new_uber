import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/user.context';
import axios from 'axios';

const UserSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullName: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/user/register`,
        newUser
      );

      if (response.status === 201 && response.data) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
      setemail('');
      setfirstname('');
      setlastname('');
      setpassword('');
    } catch (error) {
      console.error('Error during registration:', error);
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
          <h3 className="text-lg w-1/2 font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              type="text"
              required
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg placeholder:text-base w-1/2"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="First name"
            />
            <input
              type="text"
              required
              className="bg-[#eeeeee] px-4 py-2 border text-lg rounded-lg placeholder:text-base w-1/2"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="mt-4 flex font-semibold">
          Already have an account?
          <Link
            to="/user-login"
            className="ml-2 underline font-medium text-blue-400 hover:text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
