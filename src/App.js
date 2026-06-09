import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

function App() {
  const [page, setPage] = useState('login')
  return (
    <div>
     {page === 'login' && (<Login setPage={setPage} />)}
     {page === 'signup' && (<Signup setPage={setPage} />)}
     {page === 'reset' && (<ResetPassword setPage={setPage} />)}
     {page === 'welcome' && (<Welcome setPage={setPage} /> )}
    </div>
  );
}

export default App;
