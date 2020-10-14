import React from 'react';

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{height: "55px"}} src={service.img} alt="" />
      <h6 className="text-muted my-3 font-weight-bold">{service.name}</h6>
      <p style={{padding: '0px 30px'}} className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, hic velit.</p>
    </div>
  );
};

export default ServiceDetails;