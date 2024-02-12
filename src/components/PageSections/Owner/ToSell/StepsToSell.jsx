import React, { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import TabComponent from '../../../Tab/TabComponent';
import PropertyData from '../ToLease/TabsContent/PropertyData';
import PersonalData from '../ToLease/TabsContent/PersonalData';
import ValidateUser from '../ToLease/TabsContent/ValidateUser';
import CheckedStep from '../ToLease/TabsContent/components/CheckedStep';
import AddLocation from '../../../Maps/AddLocation';

const StepsToLease = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTabActive, setIsTabActive] = useState(0);
  const [sendCodeStatus, setSendCodeStatus] = useState(false);
  const [sendCodeStatusValidation, setSendCodeStatusValidation] =
    useState(false);

  const [formData, setFormData] = useState({
    propertyData: {
      operation:"Venta",
      address: '',
      propertyType: 'Departamento' ?? '',
      bedrooms: 0,
      bathrooms: 0,
      surfaceM2: 0,
      commonExpenses: 'no',
      parkingLots: 0,
      haveWarehouse: false,
    },
    personalData: {
      name: '',
      email: '',
      phone: '',
    },
    validateUser: ['', '', '', ''],
  });

  const validatePropertyForm = () => {
    const { bedrooms, bathrooms, surfaceM2, parkingLots } = formData.propertyData;
    if (
      Object.values(formData.propertyData).includes('') ||
      bedrooms === 0 || bathrooms === 0 || surfaceM2 === 0
    ) {
      return false;
    } else {
      return true;
    }
  };
  const validatePropertyFormButton = () => {
    if ( validatePropertyForm()==true ) {
      return false;
    } else {
      return true;
    }
  };

  const validatePersonalDataForm = () => {
    if (Object.values(formData.personalData).includes('')) {
      return false;
    } else {
      if (sendCodeStatus === true) {
        return true;
      }
    }
  };

  const validatePersonalDataFormButton = () => {
    if ( validatePersonalDataForm() ) {
      console.log(formData.personalData);
      return false;
    } else {
      console.log(formData.personalData);
      return true;
    }
  };

  useEffect(() => {
    validatePropertyForm();
    validatePersonalDataForm();
  }, [formData.propertyData, formData.personalData]);

  const handleNextTab = () => {
    setSelectedIndex((prev) => (prev + 1) % 3); // Cambiar el 3 por el número de pestañas que tengas
  };

  const renderTabs = () => {
    return (
      <Fragment>
        <Tab
          data-headlessui-state={isTabActive === 0 ? 'selected' : ''}
          className={` ${
            validatePropertyForm() && 'bg-green-500 text-white border '
          } rounded-tl-[25px]  outline-none w-full py-3 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {validatePropertyForm() ? (
              <CheckedStep />
            ) : (
              <strong>
                <span className="bg-primary rounded-full py-[3.5px] px-[11px] mr-1">
                  1
                </span>{' '}
                Datos de Propiedad
              </strong>
            )}
            {/* Propiedad */}
          </span>
        </Tab>

        <Tab
          className={` ${
            validatePersonalDataForm() && 'bg-green-500 text-white'
          } outline-none w-full py-3 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
          disabled={!validatePropertyForm()}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {validatePersonalDataForm() ? (
              <CheckedStep />
            ) : (
              <strong>
                <span className="bg-primary rounded-full py-[3.5px] px-[11px] mr-1">
                  2
                </span>{' '}
                Datos Personales
              </strong>
            )}
          </span>
        </Tab>

        <Tab
          disabled={!sendCodeStatus}
          className={`${
            sendCodeStatusValidation ? 'bg-green-500 text-white' : ''
          } rounded-tr-[25px] outline-none w-full py-3 xl:py-4 px-1 text-center border-t-2 font-medium text-lg border-transparent cursor-pointer`}
        >
          <span className="flex items-center text-[15px] justify-center w-full">
            {sendCodeStatusValidation ? (
              <CheckedStep />
            ) : (
              <strong>
                <span className="bg-primary rounded-full py-[3.5px] px-[11px] mr-1">
                  3
                </span>{' '}
                Validación de email
              </strong>
            )}
          </span>
        </Tab>
      </Fragment>
    );
  };

  const renderTabPanel = () => {
    return (
      <Fragment>
        <Tab.Panel>
          <PropertyData 
            formData={formData} 
            setFormData={setFormData} 
            onclickButton={handleNextTab} 
            disabledButton={validatePropertyFormButton}
          />
        </Tab.Panel>
        <Tab.Panel>
          <PersonalData
            formData={formData}
            setFormData={setFormData}
            sendCodeStatus={sendCodeStatus}
            setSendCodeStatus={setSendCodeStatus}
            onclickButton={handleNextTab} 
            disabledButton={validatePersonalDataFormButton}
          />
        </Tab.Panel>
        <Tab.Panel>
          <ValidateUser
            formData={formData}
            setFormData={setFormData}
            sendCodeStatusValidation={sendCodeStatusValidation}
            setSendCodeStatusValidation={setSendCodeStatusValidation}
          />
        </Tab.Panel>
      </Fragment>
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="w-full">
        <div className="flex items-center justify-start">
          <span className="text-white bg-primary text-center text-xl px-5 py-2.5 rounded-full font-bold mr-2">
            1
          </span>
          <div className="flex flex-col">
            <h2 className="text-2xl xl:text-4xl font-bold text-gray-800">
              Llena el Formulario
            </h2>
            <p className="text-xl">Ingresa tu dirección</p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full h-[400px] sm:h-[450px] xl:h-[600px] mt-10">
            <AddLocation formData={formData} setFormData={setFormData} />
          </div>

          <div
            className="bg-primary-ligth border-l-4 mt-4 border-primary text-primary p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">Advertencia</p>
            <p>
              Para completar el campo Ubicación debes seleccionar en el mapa.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <TabComponent renderTabs={renderTabs} renderTabPanel={renderTabPanel} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </div>
    </div>
  );
};

export default StepsToLease;
