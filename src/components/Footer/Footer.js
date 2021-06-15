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
    <>
      <div className="footer-top-container">
        <div className="footer-top-content">
          <div className="footer-top-col1">
            <img src={LogoFooterWhite} className="ft-logo" alt="Hydraulica Comercial" />
            <p>A Hydraulica Comercial, distribuidora de produtos hidráulicos e de materiais para construção em geral, nasceu da união de empreendedores que acumulam 31 anos de experiência neste seguimento.</p>
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
                  to='./pintura'
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
              <p>Segunda a sexta: das 8h às 18h<br></br>
                Sábado: das 8h às 12h
              </p>
            </div>
          </div>
          <div className="footer-top-col5">
            <div className="ft-contact">
              <h3>Contato</h3>
              <div className="ft-wp-container">
                <a href="https://web.whatsapp.com/send?phone=55439926-9120" target="_blank" rel="noreferrer" className="ft-wp-number">
                  <RiWhatsappFill />
                  <p>Administrativo:<br></br>
                    (43) 99926-9120</p>
                </a>
                <a href="https://web.whatsapp.com/send?phone=554391699838" target="_blank" rel="noreferrer" className="ft-wp-number">
                  <RiWhatsappFill />
                  <p>Comercial:<br></br>
                    (43) 99169-9838</p>
                </a>
              </div>
              <a href="mailto:contato@hydraulicacomercial.com.br" target="_blank" rel="noreferrer" className="ft-email-container">
                <MdEmail />
                <p>contato@hydraulica.com.br</p>
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
      <div className="footer-bottom">
        <p>© 2021 <strong>Hydraulica Comercial</strong> - Desenvolvido por <strong><a href="https://centro.londrinaguiase.com.br/" target="_blank" rel="noreferrer">Guia-se Marketing Digital</a></strong>.</p>
      </div>
    </>
  )
}

export default Footer;
