import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context to hold authentication-related data and functions
export const AuthContext = createContext();

// AuthProvider component manages authentication state and provides authentication-related functions
export const AuthProvider = ({ children }) => {
  // State variables to manage authentication status and user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // useEffect hook to check authentication status on component mount
  useEffect(() => {
    // Check authentication status in sessionStorage
    const isLogged = sessionStorage.getItem('isLogged');
    if (isLogged === 'true') {
      // If user is logged in, set isAuthenticated to true
      setIsAuthenticated(true);
      // Retrieve user data from sessionStorage and set it in state
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  // Function to handle user login
  const handleLogin = (username, password, history) => {
    // Perform authentication logic here
    if (username === 'admin' && password === 'admin') {
      // If credentials are valid, set isAuthenticated to true
      setIsAuthenticated(true);
      // Set user data (for demonstration purposes, setting a basic admin user)
      const adminUser = { username: 'admin', role: 'admin' };
      setUser(adminUser);
      // Save authentication status and user data to sessionStorage
      sessionStorage.setItem('isLogged', 'true');
      sessionStorage.setItem('user', JSON.stringify(adminUser));
      // Redirect to the admin page
      history.push('/admin');
    } else {
      // If credentials are invalid, show an alert
      alert('Invalid username or password');
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Clear authentication status and user data from sessionStorage
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('user');
    // Set isAuthenticated to false and clear user data
    setIsAuthenticated(false);
    setUser({});
  };

  // Provide authentication context value to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
