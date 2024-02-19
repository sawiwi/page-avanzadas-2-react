import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';
import Header from '../../components/Header/Header';

const Properties = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/propiedades') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Section className="relative flex flex-col md:flex-row my-0 md:my-0 xl:my-0">
      <Head title="Propiedades" />
      <div className="z-0 inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32">
        <Header/>
      </div>
      <PropertiesComponent />
    </Section>
  );
};

export default Properties;
