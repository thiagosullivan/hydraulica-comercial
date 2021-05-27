import React from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';

import prodHidraulica from '../assets/pageproducts/prod-page-hidraulica.jpg';
import prodEletrica from '../assets/pageproducts/prod-page-eletrica.jpg';
import prodEpi from '../assets/pageproducts/prod-page-epi.jpg';
import prodFerragens from '../assets/pageproducts/prod-page-ferragens.jpg';
import prodFerramentas from '../assets/pageproducts/prod-page-ferramentas.jpg';
import prodPintura from '../assets/pageproducts/prod-page-pintura.jpg';

function Produtos() {
  
  return (
    <div className="pagesconfig product-pages">
      <h1 className="pages-title">Nossos Produtos</h1>
      <div className="productsContainer">
        <div className="prodContLeft">
          <img src={prodHidraulica} alt="Categoria de Hidráulicos" />
          <p>
            Tudo o que você precisa em <span>hidráulica</span>:<br></br>
            <Link to='./hidraulica'>Acesse aqui</Link>
          </p>
        </div>
        <div className="prodContRight">
          <img src={prodEletrica} alt="Categoria de Elétrica" />
          <p>
            Tudo o que você precisa em <span>elétrica</span>:<br></br>
            <Link to='./eletrica'>Acesse aqui</Link>
          </p>
        </div>
        <div className="prodContLeft">
          <img src={prodEpi} alt="Categoria de EPI" />
          <p>
            Tudo o que você precisa em <span>EPI</span>:<br></br>
            <Link to='./epi'>Acesse aqui</Link>
          </p>
        </div>
        <div className="prodContRight">
          <img src={prodFerragens} alt="Categoria de Ferragens" />
          <p>
            Tudo o que você precisa em <span>ferragens</span>:<br></br>
            <Link to='./ferragens'>Acesse aqui</Link>
          </p>
        </div>
        <div className="prodContLeft">
          <img src={prodFerramentas} alt="Categoria de Ferramentas" />
          <p>
            Tudo o que você precisa em <span>ferramentas</span>:<br></br>
            <Link to='./ferramentas'>Acesse aqui</Link>
          </p>
        </div>
        <div className="prodContRight">
          <img src={prodPintura} alt="Categoria de Pintura" />
          <p>
            Tudo o que você precisa em <span>pintura</span>:<br></br>
            <Link to='./pintura'>Acesse aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
