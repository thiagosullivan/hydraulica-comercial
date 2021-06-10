import React from 'react';

import './Home.css';

import ImageSlider from '../../components/Slider/ImageSlider';
import { SliderData } from '../../components/Slider/SliderData';
import Ruler from '../../components/Ruler/Ruler';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import SliderFornecedores from '../../components/SliderFornecedoresHome/Slider';
import AboutHome from '../../components/AboutHome/AboutHome';
import ContactHome from '../../components/ContactHome/ContactHome';

function Home() {
  return (
    <div className="home-page">
      <ImageSlider slides={SliderData} />
      <Ruler />
      <CategoriesSection />
      <AboutHome />
      <ContactHome />
      <SliderFornecedores />
    </div>
  );
};

export default Home;