import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../components/Head/Head';
import AboutComponent from '../components/PageSections/About';
import AboutInfo from '../components/PageSections/Home/components/Information';

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
      <AboutInfo/>
    </Fragment>
  );
};

export default About;
