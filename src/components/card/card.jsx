import React from 'react';
import './card.styles.css';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${props.data.id}?set=set2`} />
      <h2>{props.data.name}</h2>
    </div>
  );
}
