import React from 'react';

const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">Name</th>
          <th className="text-secondary" scope="col">Email</th>
          <th className="text-secondary" scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          appointments.map(appointment =>
            <tr>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phone}</td>
            </tr>
          )
        }

      </tbody>
    </table>
  );
};

export default AppointmentShortList;