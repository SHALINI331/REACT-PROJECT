import React from 'react';

function Home({ onHotelList }) {
  return (
    <div className="home-container">
      <h1>Welcome to BookMyStay</h1>
      <button onClick={onHotelList}>View Hotels</button>
    </div>
  );
}

export default Home;
