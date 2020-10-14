import React, { useEffect, useState } from 'react';
import DoctorPost from '../DoctorPost/DoctorPost';

const Doctor = () => {
  const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
  return (
    <section className="my-5 pb-5">
      <div className="container">
        <h4 className="font-weight-bold text-center text-brand">Our Doctors</h4>
        <div className="row mt-5">
        {
          doctors.map(doctorData => <DoctorPost key={doctorData._id} doctorData={doctorData}></DoctorPost>)
        }
        </div>

      </div>

    </section>
  );
};

export default Doctor;