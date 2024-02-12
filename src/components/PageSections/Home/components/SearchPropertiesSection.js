import React, { useState, useContext } from 'react';
import { api } from '../../../../api';
import { useNavigate } from 'react-router-dom';
import { SelectsContext } from '../../../../context/selects/SelectsContext';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import SearchByCode from '../../../Input/SearchByCode';
import { webServicesTabs } from '../../../../data';
import ButtonPrimary from '../../../Button/ButtonPrimary';
import {
  company,
  paginationTopLimit,
} from '../../../../constants/consts/company';

const SearchPropertiesSection = () => {
  const { contextDataSelects } = useContext(SelectsContext);
  const { contextData } = useContext(PropertiesContext);
  const {
    regions,
    communes,
    setStateId,
    typeOfProperty,
    selectedSelects,
    setSelectedSelects,
  } = contextDataSelects;
  const { setProperties, page, setIsLoading, setNotFoundMsg } = contextData;

  const [categories, setCategories] = useState([...webServicesTabs]);
  const [activeTab, setActiveTab] = useState(categories[-1]);
  const [isOpenSearchCode, setIsOpenSearchCode] = useState(false);
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const handleOpenSearchCode = (ev) => {
    ev.preventDefault();
    setIsOpenSearchCode(!isOpenSearchCode);
  };

  /** Handle Inputs Form */
  const onTypeOfPropertyChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      typeOfProperty: ev.target.value,
    });



  const onRegionChange = (ev) => {
    const selectedRegionId = ev.target.value;
    const selectedRegion = regions.find(
      (region) => region.id === Number(selectedRegionId)
    );
    setStateId(selectedRegion.id);
    setSelectedSelects({
      ...selectedSelects,
      region:
        selectedRegion.name === 'Metropolitana de Santiago'
          ? 'Santiago'
          : selectedRegion.name === 'Arica y Parinacota'
          ? 'Arica'
          : selectedRegion.name,
    });
  };

  const onCommuneChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      commune: ev.target.value,
    });

  /** On Form Submit */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const createUrl = {
      operationType:
        selectedSelects.operationType?.length > 0
          ? `&operationType=${selectedSelects?.operationType}`
          : '',
      typeOfProperty:
        selectedSelects.typeOfProperty?.length > 0
          ? `&typeOfProperty=${selectedSelects.typeOfProperty}`
          : '',
      region:
        selectedSelects.region?.length > 0
          ? `&region=${selectedSelects.region}`
          : '',
      commune:
        selectedSelects.commune?.length > 0
          ? `&commune=${selectedSelects.commune}`
          : '',
    };

    const url = `properties?page=${page}&limit=${paginationTopLimit.topLimit}&statusId=${company.statusId}&companyId=${company.companyId}${createUrl.operationType}${createUrl.typeOfProperty}${createUrl.region}${createUrl.commune}`;

    try {
      setNotFoundMsg('');
      setProperties([]);
      setIsSearching(true);
      setIsLoading(true);
      const response = await api.get(url);
      setProperties(response.data.data);
      navigate(
        `/propiedades?statusId=${company.statusId}&companyId=${company.companyId}`
      );
      setIsLoading(false);
      setIsSearching(false);
      setNotFoundMsg(
        response.data.data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
    } catch (error) {
      console.error(error);
    }
  };

  const bedroom = [
    {
      value: 1, name: "Dormitorios"
    } , 
    {
      value: 2, name:"1 dormitorio"
    }
    ,{
      value: 3, name:"2 dormitorios"
    },
    {
      value: 4, name:"3 dormitorios"
    }
  ];
  const bath = [
    {
      value: 1, name: "Baños"
    } , 
    {
      value: 2, name:"1 baño"
    }
    ,{
      value: 3, name:"2 baños"
    },
    {
      value: 4, name:"3 baños"
    }
  ]
  const parking = [
    {
      value: 1, name: "Estacionamiento"
    } , 
    {
      value: 2, name:"1 estacionamientos"
    }
    ,{
      value: 3, name:"2 estacionamientos"
    },
    {
      value: 4, name:"3 estacionamientos"
    }
  ]

  return (
    <div className="absolute top-40 inset-96">
      <div className="bg-primary rounded-2xl w-100 w-[60%] mx-auto text-secondary p-4 xl:px-10 border shadow-xl">
        <h2 className='text-2xl font-semibold text-secondary-800 text-center py-3'>Búsqueda avanzada</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <div className="d-flex justify-start items-start pb-4">
              <div className=" border-x-primary-700">
                <nav
                  className="space-x-1 p-2 w-100 text-secondary mb:16 mx-auto w-6/6 lg:w-3/6 flex justify-center items-center flex-col sm:flex-row"
                  aria-label="Tabs"
                >
                  {categories.map((tab) => (
                    <button
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? 'bg-primary text-secondary p-2'
                          : 'border border-primary bg-primary-700 text-secondary hover:text-secondary-700 hover:border-secondary-700 '
                      }  w-full text-md my-1 font-medium leading-5 rounded-[100px] py-3 focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-secondary ring-opacity-60 ring-offset-2 focus:outline-none focus:bg-secondary text-secondary p-2`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setActiveTab(tab);
                        setSelectedSelects({
                          ...selectedSelects,
                          operationType: tab?.toLowerCase().trim(),
                        });
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full text-secondary-700 placeholder:text-secondary"
                placeholder="Tipo de Propiedad"
                value={selectedSelects?.typeOfProperty}
                onChange={onTypeOfPropertyChange}
              >
                {typeOfProperty?.map(({ value, name }) => (
                  <option key={value} value={name} className='text-secondary'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full lg:grid-cols-2">
          <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full text-secondary-700 placeholder:text-secondary"
                placeholder="Region"
                value={selectedSelects?.region}
                onChange={onRegionChange}
              >
                {regions?.map(({ id, name }) => (
                  <option key={id} value={id} name={name} className='text-secondary'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full text-secondary border-gray-300 w-full placeholder:text-secondary" 
                placeholder="Comuna"
                value={selectedSelects?.commune}
                onChange={onCommuneChange}
              >
                {communes?.map(({ id, name }) => (
                  <option key={id} value={name} className='text-secondary'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full text-secondary-700 placeholder:text-secondary"
                placeholder="Dormitorios"
                // value={selectedSelects?.surfacem2}
                // onChange={onSuperfaceChange}
              >
                {bedroom?.map(({ value, name }) => (
                  <option key={value} value={name} className='text-secondary' placeholder='Dormitorios'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full text-secondary-700 placeholder:text-secondary"
                placeholder="Baños"
                // value={selectedSelects?.typeOfProperty}
                // onChange={onTypeOfPropertyChange}
              >
                {bath?.map(({ value, name }) => (
                  <option key={value} value={name} className='text-secondary'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full text-secondary-700 placeholder:text-secondary"
                placeholder="Tipo de Propiedad"
                // value={selectedSelects?.typeOfProperty}
                // onChange={onTypeOfPropertyChange}
              >
                {parking?.map(({ value, name }) => (
                  <option key={value} value={name} className='text-secondary'>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mx-1 flex justify-center items-center my-2">
              <ButtonPrimary
                type="submit"
                className="block w-full p-[.7rem] text-center rounded-full border bg-secondary-700 text-primary  hover:bg-secondary-700"
              >
                {isSearching ? 'Buscando...' : 'Buscar'}
              </ButtonPrimary>
            </div>
          


          <div className="my-5 w-full ">
            <p className="text-sm text-primary-700">
              Buscar por{' '}
              <button
                onClick={handleOpenSearchCode}
                className="text-primary-800 hover:text-secondary-800"
              >
                código de propiedad
              </button>
            </p>
          </div>
        </form>

        {isOpenSearchCode && <SearchByCode />}
      </div>
    </div>
  );
};

export default SearchPropertiesSection;
