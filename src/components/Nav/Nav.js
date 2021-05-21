import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hydraulica-comercial-logo.png';
import { RiWhatsappFill } from 'react-icons/ri';
import SearchBar from '../SearchBar/SearchBar';

function Nav() {
  return (
    <nav>
      <div className="nav-top">
        <div className="nav-top-content">
        <Link 
            style={{ textDecoration: 'none' }} 
            to='./'
          >
            <img src={Logo} alt="Hydraulica Comercial" className="header-logo" />
          </Link>          
          <SearchBar />
          <div className="nav-contact">
            <div className="nav-contact-info">
              <a href="https://web.whatsapp.com/send?phone=554399269120" target="_blank" rel="noreferrer" className="ft-wp-number">
                <RiWhatsappFill className="nav-contact-icon" />
                <p>Administrativo:<br></br>(43) 9926-9120</p>
              </a>
            </div>
            <div className="nav-contact-info">
              <a href="https://web.whatsapp.com/send?phone=554391699838" target="_blank" rel="noreferrer" className="ft-wp-number">
                <RiWhatsappFill className="nav-contact-icon" />
                <p>Comercial:<br></br>(43) 9169-9838</p>
              </a>
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
