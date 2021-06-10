import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMobile.css';

import logoHeard from '../../assets/hydraulica-comercial-logo.png';
import { RiWhatsappFill } from 'react-icons/ri';
import HeaderMobileCategories from './HeaderMobileCategories/HeaderMobileCategories';

function HeaderMobile() {
  const [open, setOpen] = useState(false)
  
  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <div id="menuMobile" className={open !== true ? '' : 'mobileactive'}>
        <span
          className="menuHamburger"
          onClick={handleMenu}
        ></span>
        <Link to="./">
          <img src={logoHeard} alt='Logo Hydraulica' />
        </Link>
        <a href="https://web.whatsapp.com/send?phone=554399269120" target="_blank" rel="noreferrer" className="ft-wp-number top-mob-wpp">
          <RiWhatsappFill className="nav-contact-icon" />      
        </a>
        <div className="menuMobileCont">
          <ul>
            <a 
              style={{ textDecoration: 'none' }} 
              href='./'
            >
              <li>Home</li>
            </a>
            <a 
              style={{ textDecoration: 'none' }}
              href='./produtos'
            >
              <li>Nossos Produtos</li>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href='./fornecedores'
            >
              <li>Fornecedores</li>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href='./sobre_nos'
            >
              <li>Sobre Nós</li>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href='./contato'
            >
              <li>Contato</li>
            </a>
            <a
              style={{ textDecoration: 'none' }}
              href='./lojas'
            >
              <li>Nossas Lojas Virtuais</li>
            </a>
          </ul>
          <HeaderMobileCategories />
        </div>
      </div>
  </>
  )
}

export default HeaderMobile
