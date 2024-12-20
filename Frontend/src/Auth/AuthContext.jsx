import  { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; 

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
export { AuthContext };
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
