import React from 'react';
import './Sobre_Nos.css';

import ImageAbout1 from '../assets/page-about-img1.jpg';
import SrNilsonLucas from '../assets/sr-nilson-lucas.jpg';
import HumbertoJeronymo from '../assets/humberto-jeronymo.jpg';
import NilsonFilho from '../assets/nilson-filho.jpg';

function SobreNos() {
  return (
    <div className="page-about">
      <h1>A história da<br></br>
      <span>Hydraulica Comercial</span></h1>
      <div className="about-section1">
        <p>A Hydraulica Comercial, distribuidora de produtos hidráulicos e de materiais para construção em geral, nasceu da união de empreendedores que acumulam 31 anos de experiência neste seguimento. A Hydraulica Comercial conta com o SR. Nilson Lucas, investidor no projeto criado por Humberto Jeronymo e Nilson Filho.</p>
        <img src={ImageAbout1} alt="" />
      </div>
      <div className="about-owners">
        <div className="owner_card">
          <div className="owner_content">
            <img src={SrNilsonLucas} alt="Senhor Nilson Lucas" className="member_img" />
            <div className="owner_text">
              <h3>Sr. Nilson Lucas</h3>
              <span className="role"></span>
              <p>O Sr. Nilson Lucas iniciou em 1990 uma belíssima história no seguimento de materiais de construção, tendo sido representante comercial de grandes marcas, proprietário de depósito de material de construção, distribuidor atacadista e fundador da Acomac Londrina (associação dos comerciantes de materiais de construção), tendo sido o seu primeiro presidente.</p>
            </div>
          </div>
        </div>
        <div className="owner_card2">
          <div className="owner_content2">
            <div className="owner_text">
              <h3>Humberto Jeronymo</h3>
              <span className="role">Gestor Administrativo</span>
              <p>Humberto Jeronymo começou sua história em 1996, atuando em um grande player no seguimento de atacado para materiais de construção. Hoje, Humberto é proprietário da Fatto Gestão e Representação, tendo em sua lista de contas, marcas como: Deca, Hydra, Bakof Tec, Level e Brascola.</p>
            </div>
            <img src={HumbertoJeronymo} alt="Humberto Jeronymo" className="member_img" />
          </div>
        </div>
        <div className="owner_card">
          <div className="owner_content">
            <img src={NilsonFilho} alt="Nilson Filho" className="member_img" />
            <div className="owner_text">
              <h3>Nilson Filho</h3>
              <span className="role">Gestor Comercial</span>
              <p>Nilson Filho deu seus primeiros passos neste mercado no ano de 1994, sendo apoiador e colaborador de seu Pai, atuando inicialmente como ajudante de pátio, passou por todos os departamentos da empresa, chegando ao nível de gestão.
Atualmente Nilson Filho é investidor em empresas no seguimento de educação profissionalizante e no mercado de marketing digital.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
