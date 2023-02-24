import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from '../utils/mutations';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Logout = () => {
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    const { data } = await Auth.logout();
    if (data.logout.success) {
      // redirect the user to the login page or perform some other action
      return <Navigate to="/"  replace={true} />;
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}



export default Logout;