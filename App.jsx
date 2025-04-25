import React from 'react';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/userprofile' element={<UserProfile />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
