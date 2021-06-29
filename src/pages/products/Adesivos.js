import React, { useEffect, useState } from 'react';
import "./Productspage.css";
import axios from 'axios';

import {MdStore, MdPerson } from 'react-icons/md';

function Adesivos() {
  const [ adesivos, setAdesivos ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setAdesivos(response.data.produtos)
    }
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="pageprod-page">
      <h1>Adesivos</h1>
      <p>As adesivos são itens importantes do seguimento de construção civil. Não recebem o destaque dos produtos de acabamento, mas são responsáveis por garantir qualidade e segurança nas obras. Nossa linha passa por abraçadeiras, dobradiças, fechaduras, correntes, cantoneiras e muito mais.</p>
      
      <div className="pageprod-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="pageprod-prod-content">
            {adesivos
              .filter((product) => product.produto.categoria.descricao === "Adesivos")
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

export default Adesivos;