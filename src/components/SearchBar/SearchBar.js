import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiSearchAlt2 } from 'react-icons/bi';
import './SearchBar.css';
import { Link } from 'react-router-dom';

function SearchBar(){
  const [produtos, setProdutos] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([])

  // useEffect(() => {
  //   const loadUsers = async()=> {
  //     const response = await axios.get('https://reqres.in/api/users');
  //     setUsers(response.data.data)
  //   }
  //   loadUsers();
  // }, [])
  // const onChangeHandler = (text) => {
  //   let matches = []
  //   if (text.length > 0) {
  //     matches = users.filter(user => {
  //       const regex = new RegExp(`${text}`, "gi");
  //       return user.first_name.match(regex)
  //     })
  //   }
  //   console.log('matches', matches)
  //   setSuggestions(matches)
  //   setText(text)
  // }
  useEffect(() => {
    const loadProdutos = async()=> {
      const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setProdutos(response.data.produtos)
      console.log(response.data.produtos)
    }
    loadProdutos();
  }, [])
  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = produtos.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.produto.descricao.match(regex)
      })
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }
  return (
    <div className="search-container">
      <div className="search-bar-cont">        
        <input type="text"
          className="search-bar"
          onChange={e => onChangeHandler(e.target.value)}
          value={text}
          placeholder="Pesquise aqui..."
          // onBlur={() => {
          //   setTimeout(() => {
          //     setSuggestions([])
          //   }, 500);
          // }}
        />
        <BiSearchAlt2 />
      </div>
      <div className="search-suggestions">
        {suggestions && suggestions.map((suggestion, i)=>
          <Link key={i} to={suggestion.produto.categoria.descricao}>
            <div className="suggestions-item">
              <img src={suggestion.produto.imageThumbnail} alt={suggestion.produto.descricao} />
              <div className="suggestions-item-txt">
                <p>{suggestion.produto.descricao}</p>
                <span>Categoria: <strong>{suggestion.produto.categoria.descricao}</strong></span>
              </div>
            </div>
          </Link>
        )}        
      </div>
    </div>
  )
};

export default SearchBar;