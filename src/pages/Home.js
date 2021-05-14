import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import { AiFillSchedule, AiFillClockCircle, AiOutlineFileDone } from 'react-icons/ai';
import Hidraulica from '../assets/hidraulica-orange.png';
import Eletrica from '../assets/eletrica-orange.png';
import Epi from '../assets/epi-orange.png';
import Ferragens from '../assets/ferragens-orange.png';
import Pintura from '../assets/pintura-orange.png';
import Ferramentas from '../assets/ferramentas-orange.png';

import './Home.css';

import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <ImageSlider slides={SliderData} />
      <div className="ruler-icons">
        <div className="ruler-col">
          <FaBoxOpen />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="ruler-col">
          <AiFillSchedule />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="ruler-col">
          <AiFillClockCircle />
          <p>Pellentesque sit amet elit orci, lorem ipsum dolor sit amet</p>
        </div>
        <div className="ruler-col">
          <AiOutlineFileDone />
          <p>Phasellus odio arcu, sagittis quis urna in, tincidunt dapibus sapien</p>
        </div>
      </div>
      <div className="section-categories">
        <h2>A Hydraulica Comercial oferece<br></br>
        diversas categorias de produtos para você</h2>
        <h4>Abaixo você encontra as principais categorias que fornecemos</h4>
        <div className="section-categories-cards">
          <Link
            style={{ textDecoration: 'none' }}
            to='./hidraulica'
          >
            <img src={Hidraulica} alt="Hidraulica" />
            <span>Hidráulica</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./eletrica'
          >
            <img src={Eletrica} alt="Eletrica" />
            <span>Elétrica</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./epi'
          >
            <img src={Epi} alt="Epi" />
            <span>EPI</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./ferragens'
          >
            <img src={Ferragens} alt="Ferragens" />
            <span>Ferragens</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./ferramentas'
          >
            <img src={Ferramentas} alt="Ferramentas" />
            <span>Ferramentas</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./pintura'
          >
            <img src={Pintura} alt="Pintura" />
            <span>Pintura</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac gravida nunc. Vivamus porta, quam sed euismod facilisis, diam ipsum posuere urna, faucibus blandit arcu felis ut felis. Fusce luctus ante quis dictum laoreet.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;