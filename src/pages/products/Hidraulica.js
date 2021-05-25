import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hidraulica() {
  const [ hidraulicos, setHidraulicos ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setHidraulicos(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="hidraulica-page">
      <h1>Hidráulica</h1>
      <p>Pensando em oferecer variedade de soluções trabalhamos com diferentes segmentos de conexões e materiais hidráulicos. Para construção ou reforma na Hydraulica Comercial você encontra produtos para a instalação de água, esgoto e áreas externas. Em reposições e acabamentos trabalhamos com torneiras, reparos, assentos sanitários e muito mais.</p>
      
      <div className="hidraulica-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="hidraulica-prod-content">
          
            {hidraulicos
              .filter((product) => product.produto.categoria.descricao === "Hidraulica")
              .map((produtosFiltrados) => (
              <div key={produtosFiltrados.produto.id} className="hidraulica-pro-card">
                <img src={produtosFiltrados.produto.imageThumbnail} alt="" />   
                <h4>{produtosFiltrados.produto.descricao}</h4>
                <span>Marca: {produtosFiltrados.produto.marca}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Hidraulica;