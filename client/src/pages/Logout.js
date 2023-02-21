import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from './mutations';

const LogoutButton = () => {
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    const { data } = await logoutUser();
    if (data.logout.success) {
      // redirect the user to the login page or perform some other action
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}



export default Logout;