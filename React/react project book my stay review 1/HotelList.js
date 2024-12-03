import React from 'react';

function HotelList({ onHotelSelect }) {
  const hotels = [
    { id: 1, name: 'Luxury Hotel', description: 'A luxury hotel with amenities.', image: '/images/hotel1.jpg' },
    { id: 2, name: 'Economy Hotel', description: 'Affordable stay.', image: '/images/hotel2.jpg' }
  ];

  return (
    <div className="hotel-list container">
      {hotels.map(hotel => (
        <div key={hotel.id} className="hotel-item" onClick={onHotelSelect}>
          <img src={hotel.image} alt={hotel.name} />
          <h3>{hotel.name}</h3>
          <p>{hotel.description}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
