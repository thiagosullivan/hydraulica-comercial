import React from 'react';
import Slider from 'react-slick';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import './Slider.css';

import Adere from '../../assets/fornecedores/adere.png';
import BakofTec from '../../assets/fornecedores/bakof-tec.png';
import Baricar from '../../assets/fornecedores/baricarplast.png';
import Blukit from '../../assets/fornecedores/blukit.png';
import BomCorte from '../../assets/fornecedores/bomcorte.png';
import Cortag from '../../assets/fornecedores/cortag.png';
import Deca from '../../assets/fornecedores/deca.png';
import GbLuvas from '../../assets/fornecedores/gb-luvas.png';
import Herc from '../../assets/fornecedores/herc.png';
import Hydra from '../../assets/fornecedores/hydra.png';
import IvPlast from '../../assets/fornecedores/iv-plast.png';
import Kalipso from '../../assets/fornecedores/kalipso.png';
import Krona from '../../assets/fornecedores/krona.png';
import Metasul from '../../assets/fornecedores/metasul.png';
import Mucambo from '../../assets/fornecedores/mucambo.png';
import Norton from '../../assets/fornecedores/norton.png';
import Overtime from '../../assets/fornecedores/overtime.png';
import Plastcor from '../../assets/fornecedores/plastcor.png';
import Plastilit from '../../assets/fornecedores/plastilit.png';
import Roma from '../../assets/fornecedores/roma.png';
import TekBond from '../../assets/fornecedores/tek-bond.png';
import Unipega from '../../assets/fornecedores/unipega.png';
import Wd40 from '../../assets/fornecedores/wd-40.png';

const images = [Adere, BakofTec, Baricar, Blukit, BomCorte, Cortag, Deca, GbLuvas, Herc, Hydra, IvPlast, Kalipso, Krona, Metasul, Mucambo, Norton, Overtime, Plastcor, Plastilit, Roma, TekBond, Unipega, Wd40];

function SwiperFornecedores(){
  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RiArrowRightSLine />
      </div>
    )
  }
  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <RiArrowLeftSLine />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {... settings}>
        {images.map((img, idx) =>(
          <div key={img}>
            <img src={img} alt={img} />
          </div>
        ))}        
      </Slider>
    </>
  );
};

export default SwiperFornecedores;