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
        title="NOSOTROS"
      />
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-4 items-center w-full pb-5 xl:m-2 px-6 xl:px-44">
            <div className="xl:cols-span-1 w-full xl:w-64 3xl:w-80 xl:min-h-[15.5rem] m-2 xl:m-6">
              <div className="items-center text-start">
                <div>
                  <h2 className=" text-secondary-800 text-xl">Misión</h2>
                </div>

                <div>
                  <p className="text-secondary text-start">
                      Garantizamos hasta el 15% de rentabilidad por operación. Invierte de manera segura y cuenta con la asesoría de expertos que te guiaran en función de tus objetivos, desde la elección del inmueble hasta la capitalización de tu inversión.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:cols-span-1 w-full xl:w-64 3xl:w-80 xl:min-h-[15.5rem] m-2 xl:m-6">
              <div className=" items-center text-start">
                <div>
                  <h2 className=" text-secondary-800 text-xl">Visión</h2>
                </div>
                <div>
                  <p className="text-secondary text-start">
                  Cuenta con el apoyo y respaldo de los mejores bancos del país para obtener el financiamiento de hasta un 90%, para comprar tu propiedad nueva o usada.
                  </p>
                </div>
         
              </div>
            </div>

            <div className="xl:cols-span-2 w-full xl:w-[600px] 3xl:w-[700px] min-h-[15.5rem] m-2 mt-3 xl:m-6 ">
              <div className=" items-center text-start">
                <div>
                  <h2 className=" text-secondary-800"></h2>
                </div>
                <div>
                  <p className="text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum delectus nesciunt reprehenderit consequuntur labore, a ratione velit, sint mollitia quo ducimus fugit nulla animi praesentium placeat dolorum natus architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nostrum delectus nesciunt reprehenderit consequuntur labore, a ratione velit, sint mollitia quo ducimus fugit nulla animi praesentium placeat dolorum natus architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis adipisci ullam similique unde voluptates rerum sed eligendi, qui itaque laboriosam nihil asperiores?.
                  </p>
                </div>

              </div>
            </div>
        </div>
        <ResumeInfoAbout/>
      </div>
    </Fade>
  );
};

export default AboutInfo;

