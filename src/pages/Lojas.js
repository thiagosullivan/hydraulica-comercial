import React from 'react';
import './Lojas.css';

import bannerLojaProfissional from '../assets/banner-loja-profissional.jpg';
import bannerLojaLojista from '../assets/banner-loja-lojista.jpg';

function Lojas() {
  return (
    <div className="pagesconfig loja-page">
      <h1 className="pages-title">Nossas Lojas Virtuais</h1>
      <h3 className="lojas-subtitle">
        Para você <span>lojista</span>
      </h3>
      <div className="store-option">
        <img src={bannerLojaLojista} alt="Para Lojistas" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur elit diam, sit amet vestibulum ipsum auctor vel. Curabitur nec lacinia felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et efficitur leo. Aliquam nec ante elementum, tristique orci et, condimentum tortor. Ut lacinia est sed luctus.</p>
        <a href="http://facebook.com.br">Acesse</a>
      </div>
      <h3 className="lojas-subtitle">
          Para você <span>profissional</span>
        </h3>
      <div className="store-option">
        <img src={bannerLojaProfissional} alt="Para Profissionais" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur elit diam, sit amet vestibulum ipsum auctor vel. Curabitur nec lacinia felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et efficitur leo. Aliquam nec ante elementum, tristique orci et, condimentum tortor. Ut lacinia est sed luctus.</p>
      </div>
    

    </div>
  );
}

export default Lojas;
