import React from 'react';

import LogoFooterWhite from '../../assets/hydraulica-logo-white.png';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle, AiOutlineInstagram } from 'react-icons/ai';
import { RiWhatsappFill, RiFacebookCircleFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import './Footer.css';

function Footer() {
  return (
    <div className="footer-top-container">
      <div className="footer-top-content">
        <div className="footer-top-col1">
          <img src={LogoFooterWhite} className="ft-logo" alt="Hydraulica Comercial" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed dui lacinia, vestibulum tellus sed, elementum velit. Etiam vitae hendrerit sem, nec viverra mauris. Nullam ultricies condimentum mi in rutrum.</p>
        </div>
        <div className="footer-top-col2">
          <h3>Nosso Site</h3>
          <ul>            
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
                to='./sobrenos'
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
        <div className="footer-top-col3">
          <h3>Produtos</h3>
          <ul>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./hidraulica'
              >
                <li>Hidráulica</li>
              </Link>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./eletrica'
              >
                <li>Elétrica</li>
              </Link>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./epi'
              >
                <li>EPI</li>
              </Link>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./ferragens'
              >
                <li>Ferragens</li>                
              </Link>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./ferramentas'
              >
                <li>Ferramentas</li>                
              </Link>
              <Link 
                style={{ textDecoration: 'none' }} 
                to='./pinturas'
              >
                <li>Pintura</li>
              </Link>
          </ul>
        </div>
        <div className="footer-top-col4">
          <h3>Endereço</h3>
          <div className="footer-address">
            <HiOutlineLocationMarker />
            <p>Av. Sylvio Barros, 75<br></br>
              Jardim Pacaembu - Londrina - PR<br></br>
              CEP: 86078-020
            </p>
          </div>
          <div className="footer-hours">
            <AiOutlineClockCircle />
            <p>Segunda à sexta: das 8h às 18h<br></br>
              Sábado: das 8h às 12h
            </p>
          </div>
        </div>
        <div className="footer-top-col5">
          <div className="ft-contact">
            <h3>Contato</h3>
            <div className="ft-wp-container">
              <a href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank" rel="noreferrer" className="ft-wp-number">
                <RiWhatsappFill />
                <p>WhatsApp 1:<br></br>
                  (43) 99999-9999</p>
              </a>
              <a href="https://web.whatsapp.com/send?phone=554391699838" target="_blank" rel="noreferrer" className="ft-wp-number">
                <RiWhatsappFill />
                <p>WhatsApp 2:<br></br>
                  (43) 9169-9838</p>
              </a>
            </div>
            <a href="mailto:contato@hydraulicacomercial.com.br" target="_blank" rel="noreferrer" className="ft-email-container">
              <MdEmail />
              <p>contato@hydraulicacomercial.com.br</p>
            </a>
          </div>
          <div className="ft-socialmedia">
            <h3>Mídias Sociais</h3>
            <a
              href="https://www.facebook.com/Hydraulica-Comercial-104513741803478/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://www.instagram.com/hydraulica.comercial/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
