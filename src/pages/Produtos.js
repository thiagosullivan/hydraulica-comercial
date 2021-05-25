import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Produtos() {
  const [ productList, setProductList ] = useState([]);
  
  const loadProducts = async() => {
    const response = await axios.get('https://thiagosguiase.github.io/hydraulica-comercial-api/Data/api.json');
      setProductList(response.data.produtos)
      console.log("página de produtos:", response.data.produtos)
  }
  useEffect(() => {
    loadProducts();
  }, [])
  
  return (
    <div className="product-pages">
      <h1>Produtos</h1>
      <div className="productsContainer">
        {productList
          .map((listaDeProdutos) => (
            <h4>{listaDeProdutos.produto.descricao}</h4>
          ))
        }
      </div>
    </div>
  );
}

export default Produtos;
