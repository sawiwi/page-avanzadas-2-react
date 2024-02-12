import React, {useContext, useState} from "react";

import Button from "../Button/Button";
import { SelectsContext } from '../../context/selects/SelectsContext';
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiForm';
import Alert from '../Alert/Alert';
import { companyForm } from '../../constants/consts/company';
import { realtorData } from "../../constants/consts/realtor";




const FormWithUs = () =>{
  const { contextDataSelects } = useContext(SelectsContext);
  const {
    regions,
    communes,
    operationType,
    typeOfProperty,
    installmentType,
    setStateId,
    selectedSelects,
    setSelectedSelects,
  } = contextDataSelects;

  const [formData, setFormData] = useState({
    companyId: companyForm.id,
    typeProperty: "",
    action: "Contacto desde mi Servicios en página web",
    fullName: "",
    email: "",
    phone: "",
    region: "",
    commune: "...",
    address: "...",
    landArea: "...",
    termsAndConditions: false
  })

  // console.log(formData)

  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  // const [successMsg, setSuccessMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState({
    formSubmitMsg: '',
    formApiMsg: '',
  });
  const [loading, setLoading] = useState(false);


const onTypeOfPropertyChange = (ev) => {
setSelectedSelects({
  ...selectedSelects,
  typeProperty: ev.target.value,
});
  setFormData({
    ...formData, 
  typeProperty: ev.target.value});
}
  // const onOperationTypeChange = (ev) =>
  // setFormData({
  //   ...formData,
  //   operationType: ev.target.value,
  // });

  const handleNameChange = (ev) => {
    setFormData({
      ...formData,
      fullName: ev.target.value,
    });
  };

  const handleEmailChange = (ev) => {
    setFormData({
      ...formData,
      email: ev.target.value,
    });
  };

  const handlePhoneChange = (ev) => {
    setFormData({
      ...formData,
      phone: ev.target.value,
    });
  };

  const onRegionChange = (ev) => {
    const selectedRegionId = ev.target.value;
    const selectedRegion = regions.find(
      (region) => region.id === Number(selectedRegionId)
    );
    setStateId(selectedRegion.id);
    setSelectedSelects({
      ...selectedSelects,
      region:
        selectedRegion.name === 'Metropolitana de Santiago'
          ? 'Santiago'
          : selectedRegion.name === 'Arica y Parinacota'
          ? 'Arica'
          : selectedRegion.name,
    });
    setFormData({
      ...formData,
      region : ev.target.value,
    })
  };

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (
      Object.values(formData).includes('')
    ) {
      setErrorMsg({
        allFieldRequierd:
          'Por favor, completa todos los campos',
      });
      return;
    }
    try {
      setLoading(true);
      const response = await ContactFormServices.sendFormServices(
        'Página avanzada',
        // formData?.operationType,
        formData?.typeProperty,
        formData?.fullName,
        formData?.email,
        formData?.phone,
        formData?.region,
        realtorData?.email
      );

      /** Api services */
      const apiResponse = await ContactApiFormServices.addContactForm2(formData);

      if (response?.success === 'false') {
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError:
            'Se necesita activación de email del administrador/a',
        });
        setLoading(false);
        resetForm();
        return;
      }

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        setSuccessMsg({
          formSubmitMsg:
            'Solicitud enviada con exito! Un ejecutivo se contactara contigo',
          formApiMsg: 'Success!!!',
        });
        setTimeout(() => {
          setSuccessMsg({
            formSubmitMsg: '',
            formApiMsg: '',
          });
          resetForm();
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg({
        serverEmailError: 'Oh! Ha ocurrido un error al enviar tu solicitud',
      });
    }
  };

    return(
        <div className="bg-secondary w-[21rem] xl:w-[595px] 3xl:w-[100%] xl:min-h-[40vh] 3xl:min-h-[75vh] xl:p-2 3xl:p-8">
          <div className="text-center">
            <p className="text-xl xl:text-lg 3xl:text-2xl  font-bold text-primary py-6 xl:mt-0 3xl:mt-16 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis fugiat, tenetur eius rem, architecto esse perspiciatis aperiam
            </p>
          </div>
        {/* <form name="FormSubmit" onSubmit={onFormSubmit} className="xl:py-3 3xl:py-6 xl:px-6 3xl:px-20"> */}
          <form name="FormSubmit" onSubmit={onFormSubmit} className="xl:py-3 3xl:py-6 xl:px-6 3xl:px-20">
              {/* <div className="flex mb-5 justify-center">
                  <select
                  value={selectedSelects?.operationType}
                  onChange={onOperationTypeChange}
                  className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
                  >
                  <option value="">Tipo de operación...</option>
                  {operationType.map((option) => (
                      <option key={option.value} value={option.value}>
                      {option.name}
                      </option>
                  ))}
                  </select>
              </div> */}
            <div className="flex justify-center mb-5">
                <select
                value={selectedSelects?.typeProperty}
                onChange={onTypeOfPropertyChange}
                className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
                >
                <option value="">Tipo de propiedad</option>
                {typeOfProperty.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.name}
                    </option>
                ))}
                </select>
            </div>
            <div className="flex mb-5">
              <div className="w-full  flex justify-center items-center flex-col">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  name="fullName"
                  id="fullName"
                  className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
                  minLength="3"
                  value={formData?.fullName}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="w-full flex justify-center items-center flex-col">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"
                  className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
                  value={formData?.phone}
                  onChange={handlePhoneChange}
                
                  minLength="3"
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="w-full flex justify-center items-center flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                  className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
                  value={formData?.email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
          <div className="flex mb-5 justify-center">
              <select
              onChange={onRegionChange}
              className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
              >
              {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                  {region.name}
                  </option>
              ))}
              </select>
          </div>
    
    
            {errorMsg?.serverEmailError && (
              <Alert type="danger" message={errorMsg?.serverEmailError} />
            )}
    
            {errorMsg.allFieldRequierd && (
              <Alert message={errorMsg.allFieldRequierd} type="danger" />
            )}
            {successMsg?.formSubmitMsg && (
              <div
                className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                role="alert"
              >
                {successMsg?.formSubmitMsg}
              </div>
            )}
    
            <div className="flex mb-5 justify-center items-center">
              <button
                type="submit"
                className="block w-[200px] p-4 my-2 mb-4  font-semibold text-md rounded-full hover:shadow-sm transition ease-in-out duration-300 text-secondary bg-primary hover:bg-primary-opacity"
              >
                <span className="max-h-10">
                  {loading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Cargando...</span>
                    </div>
                  ) : (
                    'Contactarme'
                  )}
                </span>
              </button>
            </div>
          </form>
      </div>
    )
}

export default FormWithUs;