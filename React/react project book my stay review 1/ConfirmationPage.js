import React from 'react';

function ConfirmationPage({ bookingInfo }) {
  return (
    <div className="confirmation-page">
      <h2>Booking Confirmed!</h2>
      <p>Name: {bookingInfo.name}</p>
      <p>Email: {bookingInfo.email}</p>
      <p>Dates: {bookingInfo.dates}</p>
      <button>Go to Home</button>
    </div>
  );
}

export default ConfirmationPage;
