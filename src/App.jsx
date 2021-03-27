import React, { useState, useEffect } from 'react';
import SearchBar from './components/search-bar/search-bar';
import CardList from './components/card-list/card-list';
import './App.css';

export default function App() {
  // srore our data
  const [data, setData] = useState([]);

  // get data
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        setData(await response.json());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // filter
  const [filter, setFilter] = useState('');

  return (
    <div className='App'>
      <SearchBar filter={filter} setFilter={setFilter} />
      <CardList filter={filter} data={data} />
    </div>
  );
}
