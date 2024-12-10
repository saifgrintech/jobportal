import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth <= 992);



  // Check if a user is logged in based on the JWT token (for example)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = JSON.parse(localStorage.getItem('user'));
      setUser(decodedUser);
    }
    setLoading(false); // Done loading after checking localStorage
  }, []);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
    setUser(userData.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  //ToggleSidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
 };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isSidebarOpen,setIsSidebarOpen, toggleSidebar }}>
      {children}
    </AuthContext.Provider>
  );
};
