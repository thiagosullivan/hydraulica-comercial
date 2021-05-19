import React from 'react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Swiper.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwiperFornecedores() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 3,
            "spaceBetween": 10
          },                    
          "1080": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1300": {
            "slidesPerView": 5,
            "spaceBetween": 20
          }
        }}
      >
        <SwiperSlide>
          <img src={TresM} alt="3M" />        
        </SwiperSlide>
        <SwiperSlide>
          <img src={Adere} alt="Adere" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Amanco} alt="Amanco" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BakofTec} alt="Bakof Tec" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blukit} alt="Blukit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cipla} alt="Cipla" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CorrPlastik} alt="Corr Plastik" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Deca} alt="Deca" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Herc} alt="Herc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hydra} alt="Hydra" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mucambo} alt="Mucambo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Reboucas} alt="Rebouças" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Roma} alt="Roma Pinceis e Acessórios" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TekBond} alt="Tek Bond" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tigre} alt="Tigre" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperFornecedores;