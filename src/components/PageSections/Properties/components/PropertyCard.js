import React from 'react';
import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';

const PropertyCard = ({ data, isList }) => {
  const { id, title, image, address, commune, city, price, types , operation, bathrooms, bedrooms, coveredParkingLots} = data;
  const { BiMap , FaBath} = iconsList;

  // Validador de extension .jpg / .png/ .jpeg  para las imgs
  const validaImage = (image) => {
    if (image) {
      const validExtensions = ['.jpg', '.jpeg', '.png'];
  
      if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
        return (
          <img
            className={`${
              isList
                ? 'h-[299px] w-[100%] md:w-[400px] xl:w-[400px] object-cover '
                : ''
            }  object-cover h-[299px] w-full`}
            src={image}
            alt={`top-img-${title}`}
            width="full"
            loading='lazy'
          />
        );
      }
    }
    return (
      <img
        className={`${
          isList
            ? 'h-[299px] w-[100%] md:w-[400px] xl:w-[400px] object-cover '
            : 'rounded-t-xl'
        }  object-cover h-[299px] w-full`}
        src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
        alt={`top-img-${title}`}
        width="full"
        loading='lazy'
      />
    );
  };

  return (
    <>
     <Link  to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}>
    <div
      className={`${
        isList
          ? 'flex flex-col items-center border border-primary-700 bg-primary hover:shadow-xl md:flex-row '
          : 'w-full'
      } border  hover:cursor-pointer hover:shadow-xl bg-primary-700 ease-in-out hover:scale-105 transition-all duration-300`}
    >


        {/* Declaramos la validación de imagen */}
        {validaImage(image)}

      <div className="p-3 w-full 3xl:w-full my-4 py-3 xl:px-5 ">
          {/*<p className={`${isList ? 'flex justify-between items-center mb-2 font-extralight text-sm bg-primary-700  rounded-sm text-secondary' : 'flex justify-between items-center mb-2 font-extralight text-sm bg-primary-700  rounded-sm text-secondary'}`}>
           <span className="mr-1 text-secondary">{types?.[0]} en {!operation ? "Sin tipo de operación": operation}</span>{' '} 
             <span className="uppercase text-secondary">Cod: {id}</span> 
          </p>*/}
        <p className="mb-3 font-normal text-sm text-secondary-800 flex items-start justify-center">
          <BiMap className="text-xl mr-1 text-secondary" />
          {truncateString(
            `${address || 'Dirección no registrada'} ${
              commune || 'Comuna no registrada'
            } ${city || 'Ciudad no registrada'}`,
            60
          )}
        </p>
        <h5 className="mb-2 xl:mb-5 h-18 text-md font-light xl:text-md text-secondary-800 text-center">
          {truncateString(title ?? 'Titulo de propiedad no registrado', 70)}
        </h5>
        <div className='relative'>
            <ul className='block overflow-hidden xl:flex xl:justify-between gap-2 border-t border-secondary-700 xl:px-4'>
              <li className='m-2'>
                <div className="block text-center items-center my-1 text-secondary-700">
                  <p className="text-secondary mr-1 font-semibold">
                      Código 
                  </p>
                  {id ?? 0}
                </div>
              </li>
              <li className='m-2'>           
                {data?.currency?.name === 'UF' && data?.currency?.isoCode === 'UF' && (
                  <div className="block text-center items-center mb-3 font-semibold bg-primary-700 p-1 rounded-sm text-secondary">
                    UF
                  <p className='font-normal'>
                    {parseToDecimal(price || 0)} 
                  </p>
                    
                  </div>
                )}

                {data?.currency?.name === 'Peso Chileno' &&
                  data?.currency?.isoCode === 'CLP' && (
                    <div className="block text-center items-center mb-3 font-semibold bg-primary-700 p-1 rounded-sm text-secondary ">
                      CLP
                      <p className='font-normal'>
                      {parseToCLPCurrency(price)} 
                      </p>
                    </div>
                  )}
              </li>
              <li className='m-2'>
                <div className="block text-center items-center my-1 text-secondary-700">
                  <p className="text-secondary mr-1 font-semibold">
                      Dormitorios 
                  </p>
                  {bedrooms ?? 0}
                </div>
              </li>
              <li className='m-2'>
                <div className="block text-center items-center my-1 text-secondary-700">
                  <p className="text-secondary mr-1 font-semibold">
                      Baños 
                  </p>
                  {bathrooms ?? 0}
                </div>
              </li>
            </ul>
        </div>



        {/* <Link
          to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-secondary-700 rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Ver Detalles
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link> */}
      </div>
    </div>
    </Link>
    </>
   
  );
};

export default PropertyCard;
