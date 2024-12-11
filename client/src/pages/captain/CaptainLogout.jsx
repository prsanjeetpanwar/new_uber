import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutCaptain = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/captain/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logoutCaptain();
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default CaptainLogout;
