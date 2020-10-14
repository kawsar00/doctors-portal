import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 ">
      <div style={{border:'none'}} className="card my-3 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title text-brand font-weight-bold">{booking.subject}</h5>
          <h6 className="font-weight-bold">{booking.visitingHour}</h6>
          <p className="card-text text-secondary text-uppercase">{booking.totalSpace} spaces available</p>
          <button onClick={openModal} type="button" className="btn btn-primary btn-bg mt-4 w-75"> Submit </button>
        </div>
        <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking} date={date}></AppointmentForm>
      </div>
    </div>
  );
};

export default BookingCard;