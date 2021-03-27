import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MonsterCard from '../card/card';
import './card-list.styles.css';

export default function CardList(props) {
  return (
    <Container fluid='md' className='card-list'>
      <Row>
        {props.data
          .filter((d) => {
            return d.name.toLowerCase().includes(props.filter);
          })
          .map((d) => (
            <MonsterCard key={d.id} data={d} />
          ))}
      </Row>
    </Container>
  );
}
