import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

const PublicRoutes = () => {
  const { isLoggedIn } = useAuth();
  
  
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
