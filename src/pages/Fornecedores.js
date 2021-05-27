import React from 'react';
import './Fornecedores.css';
import FornecedoresCard from '../components/Fornecedores/FornecedoresCards';


function Fornecedores() {
  return (
    <div className="pagesconfig fornecedores-page">
      <h1 className="pages-title">Fornecedores</h1>
      <h4>Trabalhamos com os melhores fornecedores e isso nos qualifica à sempre oferecer produtos da mais alta qualidade</h4>
      <div className="fornecedores-content">
        <FornecedoresCard/>
      </div>
    </div>
  );
}

export default Fornecedores;
