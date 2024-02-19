import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import { PropertiesContext } from '../../../context/properties/PropertiesContext';
import Section from '../../Section/Section';
import MarkerIcon from '../../../assets/img/map/marker.png';
import { parseToCLPCurrency, parseToDecimal } from '../../../utils';
import PropertiesTop from '../../Navigation/PropertiesTop';

const PropertiesInMapComponent = () => {
  const { contextData } = useContext(PropertiesContext);
  const { propertiesInMap, totalItems, properties,page } = contextData;
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [totalItems, setTotalItems] = useState('');
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const [isMap, setIsMap] = useState(false);

  useEffect(() => {
    if (propertiesInMap.length > 0) {
      setIsLoading(false);
    }
  }, [propertiesInMap, isLoading]);

  return (
    <Section>
      <div className="container mt-36 mb-24  xl:mt-36 xl:mb-0">
        <div className="mb-10">
        <PropertiesTop
          {...{
            totalItems,
            page,
            isGrid,
            setIsGrid,
            isList,
            setIsList,
            properties,
            isMap, 
            setIsMap
          }}
        />
          {/* <p>
            Descubre propiedades es una forma fácil y eficiente de encontrar y
            explorar propiedades en una ubicación específica
          </p> */}
        </div>
        {/* <p className="text-secondary text-sm"><b>{totalItems} Propiedades</b> activas en mapa </p> */}

        <div>
          <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
              pitch: 45,
              width: 400,
              height: 400,
              attributionControl: false,
              longitude: -70.64827,
              latitude: -33.45694,
              zoom: 10,
              style: {
                width: 'auto',
                height: '80vh',
                borderRadius: '15px',
              },
            }}
            mapStyle={'mapbox://styles/mapbox/streets-v12'}
            style={{
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            }}
          >
            {propertiesInMap?.map((property) => {

                let longitude = -70.64827;
                let latitude = -33.45694;

                  if( property && property.LngLat){
                    const lngMatch = property.LngLat.match(/Lng: ([-\d.]+)/);
                    const latMatch = property.LngLat.match(/Lat: ([-\d.]+)/);

                    if(lngMatch && lngMatch[1]){
                      longitude = Number(lngMatch[1]);
                    }

                    if(latMatch && latMatch[1]){
                      latitude = Number(latMatch[1]);
                    }
                  }
              // let longitude =
              // Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) ||
              // -70.64827;
              // let latitude =
              // Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) ||
              // -33.45694;

              // console.log(property?.image)
              const image = property?.image
              // Validador de extension .jpg / .png/ .jpeg  para las imgs
              const validaImage = (image) => {
                if (image) {
                  const validExtensions = ['.jpg', '.jpeg', '.png'];
              
                  if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
                    return (
                          <img
                            className="rounded-t-lg"
                            src={image}
                            alt={`small-card-${property?.title}`}
                            style={{
                              height: '30px',
                            }}
                          />
                    );
                  }
                }
                return (
                  <img
                    className="rounded-t-lg"
                    src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
                    alt={`small-card-${property?.title}`}
                    style={{
                      height: '30px',
                    }}
                  />
                );
              };


              return (
                <Marker
                  key={property?.id}
                  longitude={longitude}
                  latitude={latitude}
                  offsetLeft={-20}
                  offsetTop={-10}
                  style={{
                    cursor: 'pointer',
                    zIndex: 0,
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <div>
                    <img
                      src={MarkerIcon}
                      alt="marker"
                      height={50}
                      width={50}
                      onClick={() =>
                        setSelectedProperty((prev) =>
                          prev && prev.id === property.id ? false : property
                        )
                      }
                    />

                    {selectedProperty &&
                      selectedProperty.id === property.id && (
                        <Popup
                          longitude={longitude}
                          latitude={latitude}
                          onClose={() => setSelectedProperty(true)}
                          anchor="bottom"
                          closeButton={false}
                          closeOnClick={false}
                          dynamicPosition={true}
                          focusAfterOpen={false}
                          offsetTop={-10}
                          offsetLeft={-10}
                          closeOnMove={false}
                          style={{
                            zIndex: 100,
                            cursor: 'pointer',
                          }}
                        >
                          <Link
                            to={`/propiedades/${
                              property?.id
                            }?statusId=${1}&companyId=${15}`}
                          >
                            <div className="max-w-sm bg-white">
                                {/* Declaramos la validación de imagen */}
                                {validaImage(image)}

                              <div>
                                <span className="bg-secondary text-primary px-2 py-.5 mt-1 rounded-full">
                                  {property?.types?.[0] ?? 'Propiedad'}
                                </span>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                  {property?.address ??
                                    'Dirección no registrada'}{' '}
                                  ,{' '}
                                  {property?.commune ?? 'Comuna no registrada'}{' '}
                                  , {property?.city ?? 'Ciudad no registrada'}
                                </p>

                                {property?.currency?.name === 'UF' &&
                                  property?.currency?.isoCode === 'UF' && (
                                    <p className="flex justify-end items-center mb-3 font-normal bg-primary-50 border-l-2 border-primary-400 p-1 rounded-sm text-secondary">
                                      <span className="mr-1">Desde:</span>
                                      {parseToDecimal(property?.price ?? 0)} UF
                                    </p>
                                  )}

                                {property?.currency?.name === 'Peso Chileno' &&
                                  property?.currency?.isoCode === 'CLP' && (
                                    <p className="flex justify-end items-center mb-3 font-normal bg-white border-l-2 border-primary-400 p-1 rounded-sm text-secondary">
                                      <span className="mr-1">Desde:</span>
                                      {parseToCLPCurrency(
                                        property?.price ?? 0
                                      )}{' '}
                                      CLP
                                    </p>
                                  )}

                                <div>
                                  <span>
                                    {`${property?.surface_m2}`} m<sup>2</sup>{' '}
                                    utiles -{property?.bedrooms} dorms.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Popup>
                      )}
                  </div>
                </Marker>
              );
            })}
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl />
          </Map>
        </div>
      </div>
    </Section>
  );
};

export default PropertiesInMapComponent;
