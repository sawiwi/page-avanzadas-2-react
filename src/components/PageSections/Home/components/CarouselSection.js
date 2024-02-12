import React from 'react';
// import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';
import HeroBanner from '../../../Carousel/HeroBanner';

const CarouselSection = () => (
  <div className="h-[480px] xl:h-[90vh]">
    {/* <MainCarousel data={mainCarouselData} /> */}
    <HeroBanner />
  </div>
);

export default CarouselSection;
