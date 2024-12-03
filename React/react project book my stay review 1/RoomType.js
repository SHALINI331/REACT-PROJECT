import React from 'react';

function RoomType({ onBookNow }) {
  const rooms = [
    { id: 1, type: 'Deluxe Room', description: 'Spacious and luxurious.', image: '/images/room1.jpg' },
    { id: 2, type: 'Standard Room', description: 'Comfortable and affordable.', image: '/images/room2.jpg' }
  ];

  return (
    <div className="room-list container">
      {rooms.map(room => (
        <div key={room.id} className="room-item" onClick={onBookNow}>
          <img src={room.image} alt={room.type} />
          <h3>{room.type}</h3>
          <p>{room.description}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default RoomType;
