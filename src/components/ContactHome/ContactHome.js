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
          <p>Sed gravida lectus et ex porta, et tincidunt lorem molestie. Sed eget nibh convallis, tempus purus nec, commodo sapien. Integer id neque dolor</p>
        </div>
        <div className="contact-home-col2">
          <div className="contact-wp-number">
            <RiWhatsappFill />
            <p>Falar com o João No WhatsApp:<br></br>
            (43) 99999-9999</p>
          </div>
          <div className="contact-wp-number">
            <RiWhatsappFill />
            <p>Falar com o João No WhatsApp:<br></br>
            (43) 99999-9999</p>
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
