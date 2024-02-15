import React from 'react';
// import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';
import HeroBanner from '../../../Carousel/HeroBanner';

const CarouselSection = () => (
  <div className="h-[480px] xl:h-[100vh] 3xl:h-[95vh]">
    {/* <MainCarousel data={mainCarouselData} /> */}
    <HeroBanner />
  </div>
);

export default CarouselSection;
