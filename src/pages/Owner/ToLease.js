import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Head from '../../components/Head/Head';
import HeroBanner from '../../components/Carousel/HeroBanner';
import WhyUnneSection from '../../components/PageSections/Owner/ToLease/whyUnneSection';
import CircleSection from '../../components/PageSections/Owner/ToLease/CircleSection';
import StepsToLease from '../../components/PageSections/Owner/ToLease/StepsToLease';
import WhyUnneInfo from '../../components/PageSections/Owner/ToLease/WhyUnneInfo';

/* Data */
import {
  mainCarouselLeaseData,
  whyUnneLeaseData,
  whyUnneLeaseNewData,
  CircleArrendarData,
} from '../../data/index';

import { Fade } from 'react-awesome-reveal';

const ToLease = () => {
  const location = useLocation();
  const margin = 'my-20';

  useEffect(() => {
    if (location.pathname === '/soy-propietario/quiero-arrendar') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Quiero arrendar" />

      <section>
        <HeroBanner data={mainCarouselLeaseData} />
      </section>

      <section className={`${margin}`}>
        <Fade delay={300} cascade>
          {/* {whyUnneLeaseData?.length > 0 &&
            whyUnneLeaseData?.map((e) => (
              <WhyUnneSection key={e.id} data={e} />
            ))} */}
            <WhyUnneInfo data={whyUnneLeaseNewData} title='¿Por qué Arrendar con Unne?'/>
        </Fade>
      </section>

      <section className={`${margin} bg-gray-50 py-8`}>
        <Fade delay={300} cascade>
          <CircleSection
            ubicationData={CircleArrendarData}
            ColorBorder="border-[#2E3641]"
            ColorBg="bg-[#2E3641]"
            ColorNumberBG="bg-[#F7B092]"
            ColorTextBG="bg-[#EF6025]"
            ColorText="text-white"
            titleButton='¿Quieres arrendar tu propiedad?'
          />
        </Fade>
      </section>

      <section className="my-20 xl:my-64 px-4 xl:px-32" id='formulario'>
        <StepsToLease />
      </section>
    </Fragment>
  );
};

export default ToLease;
