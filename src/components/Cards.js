import React, { useState } from 'react';

const Cards = ({ image, title, description }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setReadMoreShown(!isReadMoreShown);
  };

  // Function to truncate text to a specified number of words
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="card my-5 p-3 mb-5 bg-body-tertiary rounded fadeInUp" style={{ width: '18rem',boxShadow:'8px 8px 16px 16px rgba(0, 0, 0, 0.2)' }}>
      <img src={image} className="card-img-top" alt="Description"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {isReadMoreShown ? description : truncateText(description, 40)}
        </p>
        <a href="/booking" className="btn btn-primary">Book Now</a>
        <button onClick={toggleReadMore} className="btn btn-link">
          {isReadMoreShown ? 'Read Less' : 'Read More'}
        </button>
        
      </div>
    </div>
  );
};

export default Cards;
