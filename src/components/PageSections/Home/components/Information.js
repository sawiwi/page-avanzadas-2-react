import React from 'react';
import { useState, useEffect } from 'react';
import { iconsList } from '../../../../components/Icons/index';
import { Fade } from 'react-awesome-reveal';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import { Link } from 'react-router-dom';
import IndexGestion from '../../../Icons/custom/indexGestion';
import IndexInversion from '../../../Icons/custom/indexInversion';
import IndexServicios from '../../../Icons/custom/indexServicios';
import ResumeInfoAbout from './ResumenInfo';
import Header from '../../../Header/Header';

const AboutInfo = () => {
  const {
    IoIosArrowDown,
    RiUserSearchFill,
    BsBarChartFill,
    GiMoneyStack,
    TbPigMoney,
    TbArrowBigRightFilled,
    TbArrowBigDownFilled,
  } = iconsList;

  return (
    <Fade delay={300} direction="right" triggerOnce={true}>
      <HeadingSection
        
      />
      {/* <div className="absolute inset-0 top-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-black bg-opacity-5 xl:bg-white xl:bg-opacity-30 shadow-lg">
          <Header/>
      </div> */}
      <div className="container mt-36 mb-24  xl:mt-36 xl:mb-0">
        <div className='flex justify-start px-6 xl:px-64'>
          <h2 className='text-4xl xl:text-5xl font-bold text-secondary-ligth'>Nosotros</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 items-center w-full pb-1 px-6 xl:px-64">  
          <div className='xl:col-span-1'>
            <img className="mt-8 xl:mt-0 w-full h-[690px] object-cover object-center"  src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689975597/Projects/unne/img/hero/tramite2.jpg'}/>
          </div>   
          <div className="xl:col-span-2 w-full xl:min-h-[15.5rem] m-2 xl:m-6">
            <div className='grid grid-flow-row'>
              <div>
                  <h2 className=" text-secondary-800 text-2xl pt-10 xl:text-3xl">Lorem insup</h2>
                </div>
                <div className='mb-10'>
                  <p className="text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum delectus nesciunt reprehenderit consequuntur labore, a ratione velit, sint mollitia quo ducimus fugit nulla animi praesentium placeat dolorum natus architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum delectus nesciunt reprehenderit consequuntur labore, a ratione velit, sint mollitia quo ducimus fugit nulla animi praesentium placeat dolorum natus architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis adipisci ullam similique unde voluptates rerum sed eligendi, qui itaque laboriosam nihil asperiores?.
                  </p>
                </div>
              <div className=" items-center text-start py-2 mb-3">
                <div>
                  <h2 className=" text-secondary-grey text-2xl xl:text-3xl">Visión</h2>
                </div>
                <div>
                  <p className="text-secondary text-start">
                  Cuenta con el apoyo y respaldo de los mejores bancos del país para obtener el financiamiento de hasta un 90%, para comprar tu propiedad nueva o usada.
                  </p>
                </div>
              </div>
              <div className="items-center text-start">
                <div>
                  <h2 className=" text-secondary-grey text-2xl xl:text-3xl">Misión</h2>
                </div>

                <div>
                  <p className="text-secondary text-start">
                      Garantizamos hasta el 15% de rentabilidad por operación. Invierte de manera segura y cuenta con la asesoría de expertos que te guiaran en función de tus objetivos, desde la elección del inmueble hasta la capitalización de tu inversión.
                  </p>
                </div>
              </div>
              <ResumeInfoAbout/>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutInfo;

