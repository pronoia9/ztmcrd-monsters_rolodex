import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './card.styles.css';

export default function MonsterCard(props) {
  return (
    <Col xs={12} md={6} lg={4} xl={3}>
      <Card className='card-container'>
        <Card.Img alt='monster' src={`https://robohash.org/${props.data.id}?set=set3&size=180x180`} />
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>{props.data.email}</Card.Text>
      </Card>
    </Col>
  );
}
