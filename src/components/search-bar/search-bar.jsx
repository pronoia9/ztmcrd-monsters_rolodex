import React from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function SearchBar(props) {
  return (
    <Container fluid='md'>
      <InputGroup size='lg'>
        <InputGroup.Prepend>
          <InputGroup.Text id='inputGroup-sizing-lg'>🕵️</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder='Search monsters'
          aria-label='Search'
          value={props.filter}
          onChange={(e) => props.setFilter(e.target.value)}
        />
      </InputGroup>
    </Container>
  );
}
