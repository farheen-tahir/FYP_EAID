import React from 'react';
import './Card.css';

const Card = ({ image, heading, details, link }) => {
  return (

    <div className="card">
      <div className='card-img'><img src={image} alt={heading} /></div>
      <h3>{heading.slice(0,70)+'...'}</h3>
      <p>{details?details.slice(0,100)+'...':''}</p>

      <a href={link} target="_blank" rel="noopener noreferrer" className='button'>Read More</a>
    </div>
  );
};

export default Card;
