import React from 'react';
import './Lojas.css';

import bannerLojaProfissional from '../../assets/banner-loja-profissional.jpg';
import bannerLojaLojista from '../../assets/banner-loja-lojista.jpg';

function Lojas() {
  return (
    <div className="pagesconfig loja-page">
      <h1 className="pages-title">Nossas Lojas Virtuais</h1>
      <h3 className="lojas-subtitle">
        Para você <span>lojista</span>
      </h3>
      <div className="store-option">
        <a href="https://hydraulica.meuspedidos.com.br" target="_blank" rel="noreferrer nooppener">
          <img src={bannerLojaLojista} alt="Para Lojistas" />
        </a>
        <p>Nosso compromisso com você é compartilhar know-how de mercado e buscar sempre os melhores produtos com as melhores condições possíveis de preço, qualidade e e agilidade de entrega. Conte sempre conosco para suprir sua necessidade de reposição e atualização do seu mix de produtos.</p>
        <a href="https://hydraulica.meuspedidos.com.br" target="_blank" rel="noreferrer nooppener">Acesse Aqui</a>
      </div>
      
      <h3 className="lojas-subtitle">
        Para você <span>profissional</span>
      </h3>
      <div className="store-option">
        <a href="https://lojadoprofissional.hydraulica.com.br" target="_blank" rel="noreferrer nooppener">
          <img src={bannerLojaProfissional} alt="Para Profissionais" />
        </a>
        <p>Conte com a Hydraulica Comercial para ter acesso a produtos importantes do seu dia a dia e garantir a maior qualidade em sua prestação de serviços. Compre em volume e consiga ter grandes marcas com as melhores condições.</p>
        <a href="http://lojadoprofissional.hydraulica.com.br/" target="_blank" rel="noreferrer nooppener">Acesse Aqui</a>
      </div>
    </div>
  );
}

export default Lojas;
