import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home';
import GuestState from './components/context/guestContext/GuestState';
import AuthState from './components/context/authContext/AuthState'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import PrivateRoute from './components/pages/routes/PrivateRoute'
import setToken from '../src/utills/setToken';

if(localStorage.token) {
  setToken(localStorage.token)
}


function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <PrivateRoute exact path = '/' component = {Home} />
              <Route exact path = '/register' component = {Register} />
              <Route exact path = '/login' component = {Login} />
            </Switch>
          </div>
        </Router>
      </GuestState>
      </AuthState>
  );
}

export default App;
