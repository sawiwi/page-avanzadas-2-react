import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import Port from '../../assets/img/carousel/slide4.jpg'
import Header from '../Header/Header';
import SearchPropertiesSection from '../PageSections/Home/components/SearchPropertiesSection';
import { Link } from 'react-router-dom';


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
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[90vh] xl:h-[100vh] 3xl:h-[95vh]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />
            <div className='absolute z-30 inset-x-0 top-52 bottom-10 xl:hidden text-primary-700 text-center'>
              <h2 className='font-semibold text-4xl'>Bienvenidos</h2>
              <p className='font-normal text-lg mb-3'>Si buscas propiedades, este es tu lugar.</p>
              <Link to="/propiedades" href="/propiedades" className='p-2 px-5 bg-secondary text-primary rounded-xl'>
                Ver propiedades
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-black bg-opacity-5 xl:bg-white xl:bg-opacity-30">
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
