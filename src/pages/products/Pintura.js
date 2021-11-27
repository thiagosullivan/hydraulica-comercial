import React, { useEffect, useState } from 'react';
import "./Productspage.css";
import axios from 'axios';

import {MdStore, MdPerson } from 'react-icons/md';

function Pintura() {
  const [ pintura, setPintura ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setPintura(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="pageprod-page">
      <h1>Pintura</h1>
      <p>Para destacar as construções o acabamento é parte importante, mas a pintura é quem ganha toda atenção de longe no ambiente. Trazemos em nossa linha de produtos os melhores rolos para pintura, fita crepe, espátulas, escova de aço e muito mais.</p>
      <div className="pageprod-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="pageprod-prod-content">          
            {pintura
              .filter((product) => product.produto.categoria.descricao === "Pintura")
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

export default Pintura;