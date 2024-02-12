import React, {useContext} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import Button from '../Button/Button';
import { PropertiesContext } from '../../context/properties/PropertiesContext';



const MainCarousel = ({ data }) => {
  const { contextData } = useContext(PropertiesContext);
  const { isLoading, setIsLoading, setNotFoundMsg } = contextData;

  return (
    <AwesomeSlider
      bullets={false}
      mobileTouch={true}
      organicArrows={true}
      infinite={true}
      className="awsBtn"
    >
      {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className=" bg-center bg-no-repeat bg-cover brightness-100  h-[478px] xl:h-[100vh] xl:w-[100vw]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center w-100 xl:pl-32 bg-secondary-grey bg-opacity-40 hover:backdrop-blur-sm duration-300">
                <div className="flex flex-col w-2/3 3xl:w-1/3 ">
                  <h2 className=" text-2xl text-center xl:text-start font-bold xl:text-4xl uppercase pb-2 mb-2 text-white drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {/* <p className="text-md xl:text-xl text-white">{slide.desc}</p> */}
                  <div className='flex 3xl:justify-between'>
                    <input
                      type="search"
                      placeholder="Buscar por..."
                      name="searchInput"
                      id="searchInput"
                      // value={formData?.name}
                      // onChange={(ev) => handleName(ev.target.value)}
                      className="w-[400px] xl:w-[450px] 3xl:w-[600px] p-1 xl:p-2 pl-2 3xl:pl-3 rounded-3xl bg-white text-base 3xl:text-lg text-secondary-800 placeholder:text-secondary-700 placeholder:font-medium  outline-none focus:outline-none"
                    />
                  <Button
                      type="submit"
                      className="block w-48 3xl:w-52 px-3 3xl:p-2 uppercase ml-2 font-normal 3xl:font-semibold text-xs 3xl:text-sm rounded-full hover:shadow-sm transition ease-in-out duration-300 text-primary bg-secondary-700 hover:bg-secondary"
                    >
                      {isLoading ? 'Buscando...' : 'Buscar'}
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          ))
        : null}
    </AwesomeSlider>
  );
};

export default MainCarousel;
