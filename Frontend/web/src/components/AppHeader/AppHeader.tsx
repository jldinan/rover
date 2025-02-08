import IconButton from '../Elements/Buttons/IconButton/IconButton';
import { useAuth0 } from "@auth0/auth0-react";
import './AppHeader.css'

const AppHeader = () => {
  const { logout, loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const showHelp = () => {
    console.log(`Help`);
    console.log(user, isAuthenticated, isLoading);
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return (
    <div id="app-header">
      {!isAuthenticated && (
        <>
          <button onClick={handleLogin} >Login</button>
        </>
      )}
      {isAuthenticated && (
        <button id="profile-button" onClick={handleLogout}>
          <span>{user?.email}</span>
          <img src={user?.picture} alt={user?.name} className="profile-image" />
        </button>
      )}
      <IconButton type="help" onClick={() => showHelp()} width="45px" height="45px" />
    </div> 
  )
};

export default AppHeader;
