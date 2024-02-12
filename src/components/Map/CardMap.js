import React from 'react';
import { parseToCLPCurrency, parseToDecimal } from '../../utils';

const CardMap = ({ property }) => {
  const {
    title,
    types,
    image,
    images,
    address,
    commune,
    city,
    price,
    surface_m2,
    bedrooms,
    operation
  } = property;
  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        <img
          src={
            `https://accion.panal.house/images/${property?.id}//1.jpg` ??
            `https://accion.panal.house/images/${property?.id}//2.jpg` ??
            `https://accion.panal.house/images/${property?.id}//3.jpg`
          }
          alt={`small-card-${title}`}
          className="h-[200px] w-[100%] xl:h-[100px] xl:w-[100%] object-cover rounded-t-xl xl:rounded-none"
        />
      </a>

      <div>
        <span className="bg-secondary text-white px-2 py-.5 mt-1 rounded-full">
          {operation ?? 'No resgistrado'} de {types?.[0] ?? 'No registrado'}
        </span>
        <p className="mb-3 font-normal text-secondary dark:text-gray-400">
          {address ?? 'Dirección no registrada'} ,{' '}
          {commune ?? 'Comuna no registrada'} , {city ?? 'Ciudad no registrada'}
        </p>

        {property?.currency?.name === 'UF' &&
          property?.currency?.isoCode === 'UF' && (
            <p className="flex justify-end items-center mb-3 font-normal border-l-2 border-primary-400 p-1 rounded-sm text-secondary">
              <span className="mr-1">Desde:</span>
              {parseToDecimal(property?.price ?? 0)} UF
            </p>
          )}

        {property?.currency?.name === 'Peso Chileno' &&
          property?.currency?.isoCode === 'CLP' && (
            <p className="flex justify-end items-center mb-3 font-normal  border-l-2 border-primary-400 p-1 rounded-sm text-secondary">
              <span className="mr-1">Desde:</span>
              {parseToCLPCurrency(property?.price ?? 0)} CLP
            </p>
          )}

        <div>
          <span className='text-secondary'>
            {`${surface_m2}`} m<sup>2</sup> utiles -{bedrooms} dorms.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
