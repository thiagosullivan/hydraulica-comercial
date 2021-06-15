import React from 'react';

import "./Contato.css";

function Contato() {
  return (
    <div className="pageContact">
      <h1 className="pagesconfig pages-title">Contato</h1>

      <form id="contact-form" className="contact-form" action="https://formsubmit.co/hydraulica.comercial@gmail.com" method="POST">

        <input className="form-name" type="text" placeholder="Seu Nome" required name="name" />
        <input className="form-email" type="email" placeholder="Seu E-mail" required name="email" />
        <input className="form-phone" type="number" pattern="[0-9]" placeholder="Seu Whatsapp" required name="phone" />
        <input type="hidden" name="_next" value="https://hydraulica.com.br/obrigado"/>
        <textarea
            className="form-message"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Sua Mensagem"
            style={{resize: "none"}}
            required
        ></textarea>
        <button className="form-send" type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Contato;
