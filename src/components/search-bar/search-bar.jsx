import React from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './search-bar.styles.css';

export default function SearchBar(props) {
  return (
    <Container fluid='md' className='search'>
      <InputGroup size={props.size}>
        <InputGroup.Prepend>
          <InputGroup.Text id='inputGroup-sizing-lg'>{props.label}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={props.placeholder}
          value={props.filter}
          onChange={(e) => props.handleChange(e)}
        />
      </InputGroup>
    </Container>
  );
}
