// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './presentes.css';

// eslint-disable-next-line react/prop-types
const Presentes = ({ gifts }) => {
  return (
    <div className="presentes-container">
      {gifts.map((gift, index) => (
        <div key={index} className="card">
          <div className="card-image-container">
            <img src={gift.image} alt={gift.title} className="card-image" />
          </div>
          <div className="card-content">
            <h3>{gift.title}</h3>
            <p>{gift.description}</p>
            <a href={gift.link} target="_blank" rel="noopener noreferrer">Veja mais</a>
          </div>
        </div>
      ))}
    </div>
  );
};

Presentes.propTypes = {
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Presentes;
