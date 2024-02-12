import React, { useContext, useEffect, useState } from 'react';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import AliceCarousel from 'react-alice-carousel';
import Section from '../../../Section/Section';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import PropertyCard from '../../Properties/components/PropertyCard';
import 'react-alice-carousel/lib/alice-carousel.css';

const HighlightedProjects = () => {
  const { contextData } = useContext(PropertiesContext);
  const { properties, highlightedProperties } = contextData;
  const [isLoading, setIsLoading] = useState(true);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    1920: { items: 4 },
  };

  /** Get Highlighted Properties only */
  const getHighlightedProperties = highlightedProperties?.filter(
    (filtredProperty) => filtredProperty?.highlighted === true
  );

  useEffect(() => {
    if (highlightedProperties.length > 0) {
      setIsLoading(false);
    }
  }, [highlightedProperties, getHighlightedProperties]);

  return (
    <Section className="bg-[#f2f4f7] py-3 mb-6 xl:py-1 ">
      <HeadingSection title="PROPIEDADES DESTACADAS" className="3xl:my-1"/>

      <div className=" h-[600px] flex items-center justify-center">
        {isLoading && <p>Obteniendo Propiedades destacadas...</p>}
        {getHighlightedProperties.length > 0 ? (
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlayStrategy="none"
            autoPlayInterval={2500}
            animationDuration={2000}
            animationType="slide"
            touchTracking={false}
            disableButtonsControls
            disableDotsControls
            autoPlay
            infinite
            items={getHighlightedProperties?.map((property) => (
              <div key={property?.id} className="m-3 mb-5">
                <PropertyCard data={property} />
              </div>
            ))}
          />
        ) : (
          <p> {' '} Lo sentimos, no se han encontrado propiedades destacadas</p>
        )}
      </div>
    </Section>
  );
};

export default HighlightedProjects;
