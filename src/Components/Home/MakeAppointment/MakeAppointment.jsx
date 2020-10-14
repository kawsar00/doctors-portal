import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid" src={doctor} alt="" />
          </div>
          <div className="col-md-7 my-5 ">
            <h5 className="font-weight-bold text-brand">APPOINTMENT</h5>
            <h1 className=" my-3 text-white">Make an appointment <br />Today</h1>
            <p style={{ lineHeight: '30px' }} className="text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ratione quae enim error qui nisi omnis illum sapiente ex, sit fuga. Voluptates debitis architecto, commodi molestias tempora maiores </p>
            <button className="btn btn-primary btn-bg mt-4 w-25">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;