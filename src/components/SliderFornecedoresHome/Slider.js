import React from 'react';
import Slider from 'react-slick';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import './Slider.css';

import TresM from '../../assets/fornecedores/3m.png';
import Adere from '../../assets/fornecedores/adere.png';
import Amanco from '../../assets/fornecedores/amanco.png';
import BakofTec from '../../assets/fornecedores/bakof-tec.png';
import Blukit from '../../assets/fornecedores/blukit.png';
import Cipla from '../../assets/fornecedores/cipla.png';
import CorrPlastik from '../../assets/fornecedores/corr-plastik.png';
import Deca from '../../assets/fornecedores/deca.png';
import Herc from '../../assets/fornecedores/herc.png';
import Hydra from '../../assets/fornecedores/hydra.png';
import Mucambo from '../../assets/fornecedores/mucambo.png';
import Reboucas from '../../assets/fornecedores/reboucas.png';
import Roma from '../../assets/fornecedores/roma.png';
import TekBond from '../../assets/fornecedores/tek-bond.png';
import Tigre from '../../assets/fornecedores/tigre.png';

const images = [TresM, Adere, Amanco, BakofTec, Blukit, Cipla, CorrPlastik, Deca, Herc, Hydra, Mucambo, Reboucas, Roma, TekBond, Tigre];

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