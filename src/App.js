import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Appointment from './Components/Appointment/Appointment/Appointment';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatients from './Components/AllPatients/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import PrivateRoute from './Components/Login/PrivateRoute';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/dashboard/allPatients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
