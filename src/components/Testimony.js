import React from 'react';
import '../styles/Testimony.css';

function Testimony(props) {
  return (
    <div className='testimony-container'>
      <img
        className='testimony-image'
        alt={`imagen de ${props.name}`}
        src={require(`../images/testimonio-${props.image}.jpg`)}
      />

      <div className='text-container-testimony'>
        <p className='testimony-name'>
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className='testimony-position'>
          {props.position} en <strong>{props.company}</strong>
        </p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export { Testimony };
