import React, { useEffect, useState } from 'react';
import "./Productspage.css";
import axios from 'axios';

import {MdStore, MdPerson } from 'react-icons/md';

function Ferragens() {
  const [ ferragens, setFerragens ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setFerragens(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="pageprod-page">
      <h1>Ferragens</h1>
      <p>Pensando em oferecer variedade de soluções trabalhamos com diferentes segmentos de conexões e materiais hidráulicos. Para construção ou reforma na Hydraulica Comercial você encontra produtos para a instalação de água, esgoto e áreas externas. Em reposições e acabamentos trabalhamos com torneiras, reparos, assentos sanitários e muito mais.</p>
      
      <div className="pageprod-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="pageprod-prod-content">
          
            {ferragens
              .filter((product) => product.produto.categoria.descricao === "Ferragens")
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
        <p>Escolha a opção que mais atenda à sua necessidade:</p>
        <div className="lojas-container-links">
        <div className="sou-lojista">
            <a href="https://www.facebook.com/Hydraulica-Comercial-104513741803478/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Sou lojista
            </a>
            <MdStore />
          </div>
          <div className="sou-profissional">
            <a href="https://www.facebook.com/Hydraulica-Comercial-104513741803478/?ref=page_internal"
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

export default Ferragens;