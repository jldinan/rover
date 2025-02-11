import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import { AuthenticationGuard } from './auth-guard';
import LoadingIndicator from './components/Elements/LoadingIndicator/LoadingIndicator';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <LoadingIndicator color="#cbcccc" size="la-3x"/>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthenticationGuard component={Dashboard} />} /> 
   </Routes>
  );  
}

export default App
