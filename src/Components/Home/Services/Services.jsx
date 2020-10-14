import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/tooth.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
  {
    name: 'Fluoride Treatment',
    img: fluoride,
  },
  {
    name: 'Cavity Filling',
    img: cavity,
  },
  {
    name: 'Teeth Whitening',
    img: teeth,
  },

]

const Services = () => {
  return (
    <section>
      <div className="text-center my-5">
        <h5 className="font-weight-bold text-brand">OUR SERVICES</h5>
        <h2 style={{fontSize: '2.5rem' }} className="font-weight-bold mt-3 header-brand">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row my-5">
          {
            serviceData.map(service => <ServiceDetails service={service} ></ServiceDetails>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;