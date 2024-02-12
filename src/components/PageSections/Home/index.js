import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';
import SearchPropertiesSection from './components/SearchPropertiesSection';
import HighlightedProjects from './components/HighlightedProjects';
import ServicesContactSection from './components/ServicesContactSection';
import AboutInfo from './components/Information';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <SearchPropertiesSection />
      <HighlightedProjects />
      <AboutInfo/>
      {/* <ServicesContactSection /> */}
    </Fragment>
  );
};

export default HomeComponent;
