import React from 'react';

const Testimonial = (props) => {
  const { name, img, quote, from } = props.testimonial
  return (
    <div class="testimonials card shadow-sm ">
      <div class="card-body">
        <p class="card-text text-center">{quote}</p>
      </div>
      <div class="card-footer testimonial-card d-flex align-items-center">
        <div >
          <img className="mx-3" width="60" src={img} alt="" />
        </div>
        <div className="mt-3">
          <h6 className="font-weight-bold text-brand">{name}</h6>
          <p className="text-secondary">{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;