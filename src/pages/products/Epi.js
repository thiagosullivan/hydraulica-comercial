import React, { useEffect, useState } from 'react';
import "./Productspage.css";
import axios from 'axios';

import {MdStore, MdPerson } from 'react-icons/md';

function Epi() {
  const [ epi, setEpi ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setEpi(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="pageprod-page">
      <h1>EPI</h1>
      <p>Trabalhar com segurança e responsabilidade é parte primordial para sucesso de qualquer empresa ou profissional. Trazemos itens importantes de equipamentos de proteção individual. Confira os itens disponíveis clicando na categoria EPI's no menu superior do site.</p>
      
      <div className="pageprod-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="pageprod-prod-content">
          
            {epi
              .filter((product) => product.produto.categoria.descricao === "EPI")
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

export default Epi;