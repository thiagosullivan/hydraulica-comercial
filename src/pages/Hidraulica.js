import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hidraulica() {
  const [ hidraulicos, setHidraulicos ] = useState([]);
  const [categories, setCategories ] = useState([]);

  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
    setHidraulicos(response.data.produtos)
    console.log(response.data.produtos)
  }

    loadProducts.filter((produtos) => {
      return produtos.categoria.descricao === 'hidraulica';
    })  
  
  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className="hidraulica-page">
      <h1>Hidráulica</h1>
      <p>Pensando em oferecer variedade de soluções trabalhamos com diferentes segmentos de conexões e materiais hidráulicos. Para construção ou reforma na Hydraulica Comercial você encontra produtos para a instalação de água, esgoto e áreas externas. Em reposições e acabamentos trabalhamos com torneiras, reparos, assentos sanitários e muito mais.</p>
      
      <div className="hidraulica-prod-container">
        <h2>Veja alguns dos nossos destaques</h2>
        <div className="hidraulica-prod-container">
          
            {hidraulicos.map((produtos) => (
              <div key={produtos.produto.id} className="hidraulica-pro-card">
                <img src={produtos.produto.imageThumbnail} alt="" />   
                <h4>{produtos.produto.descricao}</h4>
                <span>Marca: {produtos.produto.marca}</span>
              </div>
            ))}          
        </div>
      </div>
    </div>
  )
}

export default Hidraulica;