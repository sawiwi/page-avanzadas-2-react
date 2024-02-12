import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../components/Head/Head';
import HomeComponent from '../components/PageSections/Home';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head
        title="Inicio"
        description="Demo creada por Unne para administrar su plataforma de corretaje de propiededas"
        keywords="unne, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />
      <HomeComponent />
    </Fragment>
  );
};

export default Home;
