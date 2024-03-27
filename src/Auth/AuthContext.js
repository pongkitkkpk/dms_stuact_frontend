// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Check authentication status in localStorage on component mount
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      // If user is logged in, set isAuthenticated to true
      setIsAuthenticated(true);
      // Retrieve user data from localStorage and set it in state
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogin = (username, password, history) => {
    // Validate the username and password
    if (username === 'admin' && password === 'admin') {
      // Set authentication status to true
      setIsAuthenticated(true);
      // Set user role to admin
      const adminUser = { username: 'admin', role: 'admin' };
      setUser(adminUser);
      // Save authentication status and user data to localStorage
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('user', JSON.stringify(adminUser));
      // Redirect to the admin page
      history.push('/admin');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear authentication status and user data from localStorage
    localStorage.removeItem('isLogged');
    localStorage.removeItem('user');
    // Set isAuthenticated to false and clear user data
    setIsAuthenticated(false);
    setUser({});
  };
    console.log("isAuthenticated auth.js",isAuthenticated)
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
