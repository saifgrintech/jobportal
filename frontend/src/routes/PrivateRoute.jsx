import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { user, loading } = useContext(AuthContext);

  // If loading is true, render nothing or a loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if the user is logged in and if their role matches the required role
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to="/" />;  // Redirect to homepage or unauthorized page
  }

  return element;  // Render the element if user has the correct role
};

export default ProtectedRoute;
