import React from 'react';

function RoomDetails({ onAvailabilityCheck }) {
  return (
    <div className="room-details">
      <h2>Room Details</h2>
      <p>Information about the room.</p>
      <button onClick={onAvailabilityCheck}>Check Availability</button>
    </div>
  );
}

export default RoomDetails;
