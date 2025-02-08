import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <main id="login">
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </main>
  )
};

export default Login;
