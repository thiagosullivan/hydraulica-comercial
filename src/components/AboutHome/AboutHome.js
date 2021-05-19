import React from 'react';
import { Link } from 'react-router-dom';
import AboutHomeLogo from '../../assets/alternative-logo-hydraulica.png';
import './AboutHome.css';

function AboutHome() {
  return (
    <div className="about-section-home">
      <div className="about-section-content">
        <div className="about-section-txt">
          <h2>Conheça a<br></br>
          <span>Hydraulica Comercial</span>
          </h2>
          <p>A Hydraulica Comercial, distribuidora de produtos hidráulicos e de materiais para construção em geral, nasceu da união de empreendedores que acumulam 31 anos de experiência neste seguimento.</p>
          <Link
            className="about-section-button"
            to='./sobre_nos'
          >
            Saiba Mais
          </Link>
        </div>
        <img src={AboutHomeLogo} alt="" />
      </div>
    </div>
  )
}

export default AboutHome;
