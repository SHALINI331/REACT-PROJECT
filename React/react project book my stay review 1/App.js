import React, { useState } from 'react';
import './App.css'; 
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import HotelList from './HotelList';
import HotelDetails from './HotelDetails';
import RoomDetails from './RoomDetails';
import RoomAvailability from './RoomAvailability';
import RoomType from './RoomType';
import BookingForm from './BookingForm';
import ConfirmationPage from './ConfirmationPage';
import BookedInfoPop from './BookedInfoPop';

function App() {
  const [currentPage, setCurrentPage] = useState('signin'); // Start at SignIn
  const [bookingInfo, setBookingInfo] = useState({}); // Booking information storage

  const handlePageSwitch = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {currentPage === 'signin' && <SignIn onSignIn={() => handlePageSwitch('home')} />}
      {currentPage === 'signup' && <SignUp onSignUp={() => handlePageSwitch('signin')} />}
      {currentPage === 'home' && <Home onHotelList={() => handlePageSwitch('hotelList')} />}
      {currentPage === 'hotelList' && <HotelList onHotelSelect={() => handlePageSwitch('hotelDetails')} />}
      {currentPage === 'hotelDetails' && <HotelDetails onRoomSelect={() => handlePageSwitch('roomDetails')} />}
      {currentPage === 'roomDetails' && <RoomDetails onAvailabilityCheck={() => handlePageSwitch('roomAvailability')} />}
      {currentPage === 'roomAvailability' && <RoomAvailability onRoomType={() => handlePageSwitch('roomType')} />}
      {currentPage === 'roomType' && <RoomType onBookNow={() => handlePageSwitch('bookingForm')} />}
      {currentPage === 'bookingForm' && (
        <BookingForm
          onBookingConfirm={(info) => {
            setBookingInfo(info);
            handlePageSwitch('confirmationPage');
          }}
        />
      )}
      {currentPage === 'confirmationPage' && <ConfirmationPage bookingInfo={bookingInfo} />}
      {currentPage === 'bookedInfoPop' && <BookedInfoPop />}
    </div>
  );
}


export default App;
