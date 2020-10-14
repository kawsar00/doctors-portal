import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact my-5 py-5">
      <div className="container">
        <div className="col-md-6 pb-5 text-center mx-auto">
          <h5 className="font-weight-bold text-brand">CONTACT US</h5>
          <h1 className=" my-3 text-white">Always Connect With Us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email Address *" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject *" />
            </div>
            <div className="form-group">
              <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
            </div>
            <div className="form-group text-center">
              <button type="button" className="btn btn-primary btn-bg mt-4 w-25"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Contact;