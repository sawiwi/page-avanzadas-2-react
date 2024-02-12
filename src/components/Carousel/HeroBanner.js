import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import Port from '../../assets/img/carousel/slide4.jpg'
import Header from '../Header/Header';
import SearchPropertiesSection from '../PageSections/Home/components/SearchPropertiesSection';;


const HeroBanner = () => {
  return (
    <div className='relative'>
            <div className='relative'>
              <SearchPropertiesSection />
            </div>
            <div>
              <img
                src={Port}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[400] xl:h-[87vh]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />
          </div>
          <div className="absolute inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-white bg-opacity-30">
              <Header/>
          </div>


 



      {/* {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[400px] xl:h-[600px]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />

      
            </div>
          ))
        : null} */}
    </div>
  );
};

export default HeroBanner;
