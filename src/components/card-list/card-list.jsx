import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../card/card';
import './card-list.styles.css';

export default function CardList(props) {
  return (
    <Container fluid='md' className='card-list'>
      <Row>
        {props.data.map((d) => (
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card key={d.id} data={d} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
