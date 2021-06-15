import React from 'react';
import { Link } from 'react-router-dom';

import './Obrigado.css';

import thanksImg from '../../assets/hidraulica-thanks.png';
import { RiArrowLeftSLine } from 'react-icons/ri';

function Obrigado() {
  return (
    <div className="thanksPage">
      <h1 className="pagesconfig pages-title">Muito Obrigado!</h1>
      <div className="thanksPage-txt">
        <p>Agradecemos por entrar em contato conosco.<br></br>
        Retornaremos o mais breve possível.</p>
        <Link to="./"><RiArrowLeftSLine /> Voltar</Link>
      </div>
      <img src={thanksImg} alt="Obrigado"/>      
    </div>
  );
}

export default Obrigado;

