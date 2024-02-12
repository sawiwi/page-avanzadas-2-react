import React, { useState, useEffect } from 'react';
import Section from '../../../Section/Section';
import { PDFViewer } from '@react-pdf/renderer';
import TopInfoAddress from './TopInfoAddress';
import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Details from './Details';
import Characteristics from './Characteristics';
import ReactMap from '../../../Map/ReactMap';
import PDFView from './PDFView';
import SimilarProyects from './SimilarProyects';
import ClipboardProperty from './ClipboardProperty';
import Modal from '../../../Modal/Modal';
import Spinner from '../../../Spinner/Spinner';
import { iconsList } from '../../../Icons';
import Button from '../../../Button/Button';

import Logo from '../../../../assets/img/logo/unne-logo.png'
// import LocationSearch from './LocationSearch';

const PropertyComponent = ({ property }) => {
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [showModalShare, setShowModalShare] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [copied, setCopied] = useState(false);
  const { FaShare, MdSimCardDownload } = iconsList;

  const lng = Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

  /** Render clipboard property modal */
  const renderContent = () => (
    <ClipboardProperty
      {...{
        propertyId: property?.id,
        copied,
        setCopied,
      }}
    />
  );

  /** Render Property detail */
  // const renderContentPdf = () => (
  //   <PDFViewer className="w-full h-[90vh]">
  //     <PDFView property={property} />
  //   </PDFViewer>
  // );

  useEffect(() => {
    if (Object.keys(property).length > 0) {
      setLoadingOnStart(false);
      return;
    }
  }, [property]);

  return (
    <Section>
      {loadingOnStart && <Spinner />}

      {Object.keys(property).length > 0 && (
        <div className="my-10 px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 mx-auto">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3  max-h-auto  ">
              <Details property={property} />
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 shadow-lg max-h-auto ">
              <div className="flex justify-between items-center py-2.5 px-5 text-xs xl:text-sm text-secondary">
                <TopInfoAddress property={property} />
                <div className="flex flex-row">
                  <span
                    onClick={() => setShowModalShare(true)}
                    className="flex items-center hover:text-secondary-opacity  cursor-pointer"
                  >
                    <FaShare className="mr-1" />
                    Compartir
                  </span>
                </div>
              </div>
              <GalleryCarousel items={property} />
              <Characteristics property={property} />
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-2 h-auto shadow-md">
              <div className='grid grid-cols-1 xl:grid-cols-3'> 
                <div className='col-span-2'>
                  <SimilarProyects property={property} />
                </div>
                <div className='col-span-1'>
                    <div className='2xl:h-40'>
                      <div className={`flex flex-col max-h-[600px] xl:px-4`}>
                          <div className="">
                            <h2 className='text-secondary xl:text-2xl xl:text-center py-3'>Información del corredor</h2>
                          </div>
                          <img src={Logo} alt="" className='block px-1 xl:mx-32 w-56 h-16 xl:my-5' />
                        <div className='block px-4 xl:px-20 text-center' >
                          <ul className='text-center text-secondary text-lg'>
                              <li className='flex items-center my-2'>
                                <b>Agente:</b><p className="p-2 text-secondary ">{property?.realtor.name}</p>
                              </li>
                              <li className='flex items-center my-3'>
                                <b>Correo</b><p className="p-2 text-secondary">{property?.realtor.mail}</p>
                              </li>
                              <li className='flex items-center my-3'>
                                <b>Celular</b><p className="p-2 text-secondary">{property?.realtor.phone || '+56 2 6469 1800' }</p>
                              </li>    
                          </ul>
                          <Button
                          type="submit"
                          className="block w-56 p-2 my-2 font-semibold text-md rounded-full hover:shadow-sm transition ease-in-out duration-300 text-primary bg-secondary hover:bg-secondary-ligth"
                          >Contáctar
                        </Button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ReactMap
              longitudeProp={lng}
              latitudeProp={lat}
              property={property}
            />
          </div>
          <Modal
            renderTrigger={() => null}
            isOpenProp={showModalShare}
            renderContent={renderContent}
            contentExtraClass="max-w-2xl"
            modalTitle="Compartir Propiedad"
            onCloseModal={() => {
              setShowModalShare(false);
            }}
          />
          {/* <Modal
            renderTrigger={() => null}
            isOpenProp={showModalDetail}
            // renderContent={renderContentPdf}
            contentExtraClass="max-w-[90%]"
            modalTitle="Descargar PDF"
            onCloseModal={() => {
              setShowModalDetail(false);
            }}
          /> */}
        </div>
      )}
    </Section>
  );
};

export default PropertyComponent;
