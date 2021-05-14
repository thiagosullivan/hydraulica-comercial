import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hydraulica-comercial-logo.png';
import { FaFax } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

function Nav() {
  return (
    <nav>
      <div className="nav-top">
        <div className="nav-top-content">
          <img src={Logo} alt="Hydraulica Comercial" className="header-logo" />
          <input type="text" />
          <div className="nav-contact">
            <div className="nav-contact-info">
              <FaFax className="nav-contact-icon" />
              <p>Fax:<br></br>(43) 9999-9999</p>
            </div>
            <div className="nav-contact-info">
              <RiWhatsappFill className="nav-contact-icon" />
              <p>Fax:<br></br>(43) 9999-9999</p>
            </div>   
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <ul className="nav-links">
          <Link 
            style={{ textDecoration: 'none' }} 
            to='./'
          >
            <li>Home</li>
          </Link>
          <Link 
            style={{ textDecoration: 'none' }}
            to='./produtos'
          >
            <li>Nossos Produtos</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./fornecedores'
          >
          <li>Fornecedores</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./sobre_nos'
          >
          <li>Sobre Nós</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./contato'
          >
          <li>Contato</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./lojas'
          >
            <li>Nossas Lojas Virtuais</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
