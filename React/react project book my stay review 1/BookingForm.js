import React, { useState } from 'react';

function BookingForm({ onBookingConfirm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dates, setDates] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send booking info
    onBookingConfirm({ name, email, dates });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Dates:</label>
        <input type="text" value={dates} onChange={(e) => setDates(e.target.value)} required />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
