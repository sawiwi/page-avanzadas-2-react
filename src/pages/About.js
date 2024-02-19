import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../components/Head/Head';
import AboutComponent from '../components/PageSections/About';
import AboutInfo from '../components/PageSections/Home/components/Information';
import Header from '../components/Header/Header';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/quienes-somos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Nosotros" />
      {/* <AboutComponent /> */}
      <div className="z-0 inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32">
        <Header/>
      </div>
      <AboutInfo/>
    </Fragment>
  );
};

export default About;
