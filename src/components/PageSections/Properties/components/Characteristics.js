import React, { useState, useEffect } from 'react';
import { iconsList } from '../../../Icons';

const Characteristics = ({ property }) => {
  const {
    title,
    description,
    company,
    price,
    surface_m2,
    bedrooms,
    bathrooms,
    coveredParkingLots,
    status,
  } = property;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;

  const lineas = description.split('\n');
  const lineasIni = 5;
  const lineasViews= lineas ? lineas.length : lineasIni

  return (
    <div className="flex flex-col p-5 mt-5 md:xl:mt-24 lg:xl:mt-24 xl:mt-24">
      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <RiPencilRulerLine />
          </span>
          Superficie útil: {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <FaBath />
          </span>
          Baños: {bathrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <BsFillCalendarCheckFill />
          </span>
          Fecha de entrega: {'Pendiente'}
        </div>
      </div>
      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <FaBed />
          </span>
          Dormitorios: {bedrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <GiHomeGarage />
          </span>
          Estacionamientos: {coveredParkingLots ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-secondary-700">
          <span className="text-secondary mr-1">
            <BsCheckCircle />
          </span>
          Estado del proyecto: {status ?? 'Desabilitado'}
        </div>
      </div>

      <div className="my-5">
        <h5 className="text-lg xl:text-xl text-secondary-800">Descripción</h5>
        <p className="text-secondary-700">
          {/* {description ?? 'Propiedad sin descripción registrado'} */}
          {lineas.slice(0, lineasViews).map((linea, idx) => (
            <p key={idx} className="text-secondary-700 mt-2">- {linea}</p>
          ))
          }
        </p>
      </div>
    </div>
  );
};

export default Characteristics;
