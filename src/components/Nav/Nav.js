import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import NavBottom from '../Nav/NavBottom/NavBottom';

import './Nav.css';

import Logo from '../../assets/hydraulica-comercial-logo.png';
import { RiWhatsappFill } from 'react-icons/ri';

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
      <NavBottom />
    </nav>
  );
}

export default Nav;
