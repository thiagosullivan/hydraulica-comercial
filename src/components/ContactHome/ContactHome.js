import React from 'react';
import './ContactHome.css';
import { Link } from 'react-router-dom';


import { FcDocument } from 'react-icons/fc';
import { RiWhatsappFill } from 'react-icons/ri';

function ContactHome() {
  return (
    <div className="contact-home-section">
      <div className="contact-home-content">
        <div className="contact-home-col1">
          <h2>Solicite<br></br>o seu<br></br>orçamento</h2>
          <FcDocument />
          <p>Precisa de mais informações ou gostaria de receber nosso contato por e-mai? Preencha o formulário e retornaremos o seu contato.</p>
        </div>
        <div className="contact-home-col2">
          <div className="contact-wp-number">
            <RiWhatsappFill />
            <p>Administrativo:<br></br>
            (43) 99926-9120</p>
          </div>
          <div className="contact-wp-number">
            <RiWhatsappFill />
            <p>Comercial:<br></br>
            (43) 99169-9838</p>
          </div>
          <Link
            className="contact-wp-btn"
            to="./contato"
          >
            Solicite seu orçamento
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactHome;
