import React from 'react';
import './CategoriesSection.css';

import Hidraulica from '../../assets/icons-home/hidraulica-orange.png';
import Eletrica from '../../assets/icons-home/eletrica-orange.png';
import Epi from '../../assets/icons-home/epi-orange.png';
import Ferragens from '../../assets/icons-home/ferragens-orange.png';
import Pintura from '../../assets/icons-home/pintura-orange.png';
import Ferramentas from '../../assets/icons-home/ferramentas-orange.png';

import { Link } from 'react-router-dom';

function CategoriesSection (){
  return (
    <div className="section-categories">
      <h2>A Hydraulica Comercial oferece<br></br>
      diversas categorias de produtos para você</h2>
      <div className="section-categories-cards">
        <Link
          style={{ textDecoration: 'none' }}
          to='./hidraulica'
        >
          <img src={Hidraulica} alt="Hidraulica" />
          <span>Hidráulica</span>
          <p>Pensando em oferecer variedade de soluções trabalhamos com diferentes segmentos de conexões e materiais hidráulicos. Para construção ou reforma na Hydraulica Comercial você encontra produtos para a instalação de água, esgoto e áreas externas. Em reposições e acabamentos trabalhamos com torneiras, reparos, assentos sanitários e muito mais.</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='./eletrica'
        >
          <img src={Eletrica} alt="Eletrica" />
          <span>Elétrica</span>
          <p>A linha elétrica é parte importante do seu negócio, sabemos disso, e para ajudar com as melhores condições buscamos as melhores parcerias do seguimento. Destacamos em nossa linha de produtos para estrutura básica as caixas de luz, abraçadeiras de nylon, conduítes, etc...</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='./epi'
        >
          <img src={Epi} alt="Epi" />
          <span>EPI</span>
          <p>Trabalhar com segurança e responsabilidade é parte primordial para sucesso de qualquer empresa ou profissional. Trazemos itens importantes de equipamentos de proteção individual. Confira os itens disponíveis clicando na categoria EPI's no menu superior do site.</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='./ferragens'
        >
          <img src={Ferragens} alt="Ferragens" />
          <span>Ferragens</span>
          <p>As ferragens são itens importantes do seguimento de construção civil. Não recebem o destaque dos produtos de acabamento, mas são responsáveis por garantir qualidade e segurança nas obras. Nossa linha passa por abraçadeiras, dobradiças, fechaduras, correntes, cantoneiras e muito mais.</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='./ferramentas'
        >
          <img src={Ferramentas} alt="Ferramentas" />
          <span>Ferramentas</span>
          <p>Sem as ferramentas tudo seria muito mais difícil na construção. Buscamos as ferramentas manuais de maior utilidade e valor agregado. Nossa linha passa por colher de pedreiro, trena, caixa de ferramentas, pá, peneira, pistolas para aplicação de silicone e muito mais.</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='./pintura'
        >
          <img src={Pintura} alt="Pintura" />
          <span>Pintura</span>
          <p>Para destacar as construções o acabamento é parte importante, mas a pintura é quem ganha toda atenção de longe no ambiente. Trazemos em nossa linha de produtos os melhores rolos para pintura, fita crepe, espátulas, escova de aço e muito mais.</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesSection;