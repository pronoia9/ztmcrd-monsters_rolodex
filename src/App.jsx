import React, { useState, useEffect } from 'react';
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

  return (
    <div className='App'>
      {data.map((d) => (
        <h1 key={d.id}>{d.name}</h1>
      ))}
    </div>
  );
}
