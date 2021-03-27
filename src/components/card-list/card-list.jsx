import React from 'react';
import Card from '../card/card';
import './card-list.styles.css';

export default function CardList(props) {
  return (
    <div className='card-list'>
      {props.data.map((d) => (
        <Card key={d.id} data={d}/>
      ))}
    </div>
  );
}
