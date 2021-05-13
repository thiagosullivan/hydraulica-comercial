import React, { useState, useEffect } from 'react';
import '../App.css';

function Produtos() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character');

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.resultid}>{item.name}</h1>
      ))}
    </div>
  );
}

export default Produtos;
