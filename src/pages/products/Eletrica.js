import React, { useEffect, useState } from 'react';
import "./Productspage.css";
import axios from 'axios';

import {MdStore, MdPerson } from 'react-icons/md';

function Eletrica() {
  const [ eletrica, setEletrica ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setEletrica(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="pageprod-page">
      <h1>Elétrica</h1>
      <p>A linha elétrica é parte importante do seu negócio, sabemos disso, e para ajudar com as melhores condições buscamos as melhores parcerias do seguimento. Destacamos em nossa linha de produtos para estrutura básica as caixas de luz, abraçadeiras de nylon, conduítes, etc...</p>
      
      <div className="pageprod-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="pageprod-prod-content">
          
            {eletrica
              .filter((product) => product.produto.categoria.descricao === "Eletrica")
              .map((produtosFiltrados) => (
              <div key={produtosFiltrados.produto.id} className="pageprod-pro-card">
                <img src={produtosFiltrados.produto.imageThumbnail} alt="" />   
                <h4>{produtosFiltrados.produto.descricao}</h4>
                <span>Marca: {produtosFiltrados.produto.marca}</span>
                <p>{produtosFiltrados.produto.descricaoCurta}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="lojas-container">
        <h2>Confira nosso estoque completo e adquira a partir de um dos nossos e-commerces</h2>
        <p>Escolha a opção que atenda sua necessidade:</p>
        <div className="lojas-container-links">
          <div className="sou-lojista">
            <a href="https://hydraulica.meuspedidos.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Sou lojista
            </a>
            <MdStore />
          </div>
          <div className="sou-profissional">
            <a href="https://lojadoprofissional.hydraulica.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Sou profissional
            </a>
            <MdPerson />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eletrica;