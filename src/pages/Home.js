import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';
import { AiFillSchedule, AiFillClockCircle, AiOutlineFileDone } from 'react-icons/ai';

import './Home.css';

import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';
import CategoriesSection from '../components/CategoriesSection/CategoriesSection';
import SwiperFornecedores from '../components/SliderFornecedoresHome/Swiper';
import AboutHome from '../components/AboutHome/AboutHome';
import ContactHome from '../components/ContactHome/ContactHome';

function Home() {
  return (
    <div className="home-page">
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
      <CategoriesSection />
      <AboutHome />
      <ContactHome />
      <SwiperFornecedores />
    </div>
  );
};

export default Home;