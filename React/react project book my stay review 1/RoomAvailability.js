import React from 'react';

function RoomAvailability({ onRoomType }) {
  return (
    <div className="room-availability">
      <h2>Room Availability</h2>
      <p>Available dates and options.</p>
      <button onClick={onRoomType}>View Room Types</button>
    </div>
  );
}

export default RoomAvailability;
