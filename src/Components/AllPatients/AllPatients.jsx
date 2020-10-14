import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AppointmentTable from '../Dashboard/AppointmentTable/AppointmentTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/appointments')
    .then(res => res.json())
    .then(data =>setAppointments(data))
  } ,[])

  return (
    <div className="container-fluid row"> 
      <Sidebar />
      <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
      <h5 className="text-brand">All Patients</h5>
      <AppointmentTable appointments={appointments}></AppointmentTable>

      </div>
    </div>
  );
};

export default AllPatients;