import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const isLogged = sessionStorage.getItem('isLogged');
    if (isLogged === 'true') {
      setIsAuthenticated(true);
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogin = async (username, password, history) => {
    // ***************************admin****************************************
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      const adminUser = { username: 'admin', account_type: 'admin' };
      setUser(adminUser);
      sessionStorage.setItem('isLogged', 'true');
      sessionStorage.setItem('user', JSON.stringify(adminUser));
      history.push('/admin');
    } else {
      // If credentials are invalid, show an alert

      try {

        const response = await axios.post(
          "http://localhost:3001/api/authen",
          {
            username,
            password,
          },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            maxBodyLength: Infinity,
          }
        );

        // console.log(response)
        // console.log(response.data.status)
        // Check if the authentication was successful

        if (response.data.status === 'success') {
          // console.log(response.data.message.username)
          setIsAuthenticated(true);
          setUser(response.data.message);
          
          // console.log(response.data.message.account_type)
          const studentUser = { username: response.data.message.username, role: response.data.message.account_type };
          setUser(studentUser);
          sessionStorage.setItem('isLogged', 'true');
          sessionStorage.setItem('user', JSON.stringify(response.data.message));
          history.replace(`/${response.data.message.account_type}/allproject`);

        } else {
          alert('Authentication failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    }
  };



  const handleLogout = () => {
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
