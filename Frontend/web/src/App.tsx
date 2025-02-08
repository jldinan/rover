import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import { AuthenticationGuard } from './auth-guard';
import Login from './components/Login/Login';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" Component={Dashboard} /> 
      <Route path="/dashboard" Component={Dashboard} /> 
   </Routes>
  );  
}

export default App
