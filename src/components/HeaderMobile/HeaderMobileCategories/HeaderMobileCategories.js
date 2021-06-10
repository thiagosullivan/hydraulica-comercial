import React from 'react';
import './HeaderMobileCategories.css';

function HeaderMobileCategories (){
  return (
    <div className="mobile-section-categories">
        <a
          style={{ textDecoration: 'none' }}
          href='./hidraulica'
        >
          <span>Hidráulica</span>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='./eletrica'
        >
          <span>Elétrica</span>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='./epi'
        >
          <span>EPI</span>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='./ferragens'
        >
          <span>Ferragens</span>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='./ferramentas'
        >
          <span>Ferramentas</span>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='./pintura'
        >
          <span>Pintura</span>
        </a>
      </div>
  )
}

export default HeaderMobileCategories;