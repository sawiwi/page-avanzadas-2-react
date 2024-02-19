import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import PropertiesInMapComponent from '../../components/PageSections/PropertiesInMap';
import Header from '../../components/Header/Header';

const PropertiesInMap = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/propiedades/propiedades-en-mapa') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Propiedades en mapa" />
      <div className="z-0 inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32">
        <Header/>
      </div>
      <PropertiesInMapComponent />
    </Fragment>
  );
};

export default PropertiesInMap;
