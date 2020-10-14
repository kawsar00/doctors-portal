import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import AppointsByDate from '../AppointsByDate/AppointsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const Dashboard = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointments, setAppointments] = useState([])
  const handleDateChange = date => {
    setSelectedDate(date)
  }
  useEffect(() => {
    fetch('http://localhost:5000/appointmentByDate', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
  }, [selectedDate])
  
  return (
    <div className="dashboard-container container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5">
      <Calendar
          onChange={handleDateChange}
          value={new Date()}
        />
      </div>
      <div className="col-md-5">
        <AppointsByDate appointments={appointments}></AppointsByDate>
      </div>
    </div>
  );
};

export default Dashboard;