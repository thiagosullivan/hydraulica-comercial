import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.css';

import hidraulicaIcon from '../../assets/categorymenu/category-hidraulica.png';
import eletricaIcon from '../../assets/categorymenu/category-eletrica.png';
import epiIcon from '../../assets/categorymenu/category-epi.png';
import ferragensIcon from '../../assets/categorymenu/category-ferragens.png';
import ferramentasIcon from '../../assets/categorymenu/category-ferramentas.png';
import pinturaIcon from '../../assets/categorymenu/category-pintura.png';

function Categories(){
  return (
    <div className="categories-list">
      <div className="categories-list-content">
          <Link 
            className="categories-link" 
            to='./hidraulica'
          >
          <img src={hidraulicaIcon} alt="Hidraulica" />
          Hidráulica
        </Link>
        <Link 
          className="categories-link" 
          to='./eletrica'
        >
          <img src={eletricaIcon} alt="Eletrica" />
          Elétrica
        </Link>
        <Link 
          className="categories-link" 
          to='./epi'
        >
          <img src={epiIcon} alt="EPI" />
          EPI
        </Link>
        <Link 
          className="categories-link" 
          to='./ferragens'
        >
          <img src={ferragensIcon} alt="Ferragens" />
          Ferragens
        </Link>
        <Link 
          className="categories-link" 
          to='./ferramentas'
        >
          <img src={ferramentasIcon} alt="ferramentas" />
          Ferramentas
        </Link>
        <Link 
          className="categories-link" 
          to='./pintura'
        >
          <img src={pinturaIcon} alt="Pintura" />
          Pintura
        </Link>
      </div>
    </div>
  );
}

export default Categories;