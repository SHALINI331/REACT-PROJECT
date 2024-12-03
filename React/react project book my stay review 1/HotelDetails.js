import React from 'react';

function HotelDetails({ onRoomSelect }) {
  return (
    <div className="hotel-details">
      <h2>Hotel Details</h2>
      <p>Information about the hotel.</p>
      <button onClick={onRoomSelect}>Select Room</button>
    </div>
  );
}

export default HotelDetails;
