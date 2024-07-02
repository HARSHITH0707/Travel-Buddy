import React from 'react';
import './Thank.css'; // Make sure to import the CSS file

const ThankYou = () => {
  return (
    <div className='community-container'>
      <div className='image-container bounce'>
        <img src='./thankyou.jpg' alt='loading' />
      </div>
      <div className='text-container'>
        <h1>Your Tickets are Booked</h1>
      </div>
    </div>
  );
};

export default ThankYou;
