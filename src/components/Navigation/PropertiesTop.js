import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconsList } from '../Icons';
import { paginationTopLimit } from '../../constants/consts/company';
import { PropertiesContext } from '../../context/properties/PropertiesContext';

const PropertiesTop = ({
  totalItems,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
  isMap,
  setIsMap
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { sortOrder, handleSortChange } = contextData;
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt } = iconsList;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      default:
        return 'Mapa de propiedades';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3 mb-1  w-full">
        <div className="flex justify-start items-center">
            <h1 className="text-2xl xl:text-3xl font-ligth  text-secondary-700 uppercase ">
              {getTitle(pathname)}
            </h1>
        </div>
      <div className="flex justify-between items-center my-4">
      <div className="flex flex-wrap flex-row justify-center xl:justify-start items-center text-secondary-700">
        <p className="text-sm p-1 font-normal">
        {totalItems ?? 0} Total Propiedades
        </p>
      </div>
        <div>
          <ul className="flex">
            <li className="w-[200px] sm:flex hidden mr-5 text-secondary-700">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-1 border outline-none rounded-lg focus:outline-none bg-white border-gray-200 w-[100%]"
              >
                <option value="">Ordenar por:</option>
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
              </select>
            </li>

            <li
              onClick={() => {
                setIsGrid(true);
                setIsMap(false);
                // setIsList(false);
              }}
              className={`${
                isGrid ? 'bg-secondary text-primary rounded-full' : 'bg-secondary-grey text-primary rounded-full'
              } mx-1 p-2.5 cursor-pointer `}
            >  
            <Link to="/propiedades">
              <BsFillGridFill />
            </Link>
            </li>
            {/* <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-secondary text-primary rounded-full'
                  : 'bg-secondary-opacity hover:bg-secondary duration-300 cursor-pointer text-primary rounded-full'
              } mx-1 p-2.5 cursor-pointer`}
            >
              <FaThList />
            </li> */}
            <li onClick={() => {
                  setIsGrid(false);
                  setIsMap(true);
                }} className={`${isMap ? ' bg-secondary hover:bg-secondary-grey rounded-full duration-300  text-primary-700': 'bg-secondary text-primary rounded-full'} rounded-full cursor-pointer mx-1 p-2.5`}>
                <Link to="/propiedades/propiedades-en-mapa">
                  <FaMapMarkerAlt />
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTop;
