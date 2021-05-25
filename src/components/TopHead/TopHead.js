import React from 'react';
import './TopHead.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';

function TopHead(){
  return (
    <div className="tophead">
      <div className="top-head-content">
        <button>
          Faça seu login
        </button>
        <ul>
          <a
            className="topHead-socialmedia"
            href="https://www.facebook.com/Hydraulica-Comercial-104513741803478/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleFill />
          </a>
          <a
            className="topHead-socialmedia"
            href="https://www.instagram.com/hydraulica.comercial/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default TopHead;