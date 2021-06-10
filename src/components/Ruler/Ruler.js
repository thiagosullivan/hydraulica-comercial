import React from 'react';
import { FaClock, FaTruck, FaUsers } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';

import './Ruler.css';

function Ruler() {
  return (
    <div className="ruler-section">
      <div className="ruler-icons">
        <div className="ruler-col">
          <FaTruck />
          <p>Rapidez na entrega</p>
        </div>
        <div className="ruler-col">
          <FaClock />
          <p>Compre online 24h</p>
        </div>
        <div className="ruler-col">
          <RiShieldCheckFill />
          <p>Segurança e confiabilidade</p>
        </div>
        <div className="ruler-col">
          <FaUsers />
          <p>Atendimento personalizado</p>
        </div>
      </div>
    </div>
  )
}

export default Ruler;
