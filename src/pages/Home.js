import React from 'react';
import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';

function Home() {
  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  );
};

export default Home;