import React, { useState } from 'react';
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiForm';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import ToastifyComponent from '../Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import { realtorData } from '../../constants/consts/realtor';
import { companyData } from '../../constants/consts/company';
import { iconsList } from '../Icons';
import { companyForm } from '../../constants/consts/company';

const FormContact = ({ title }) => {
  const { FaUserAlt, BsFillTelephoneFill, FiMail } = iconsList;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    termsAndConditions: false,
    companyId: companyForm.id,
    action: 'Contacto desde mi página web',
    message: '',
    subject: '',
    lastName: '...',
    meetingDate: 'No indicada',
  });

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

  /** Handle Name change */
  const handleNameChange = (ev) => {
    setFormData({
      ...formData,
      name: ev.target.value,
    });
  };

  /** Handle Email change */
  const handleEmailChange = (ev) => {
    setFormData({
      ...formData,
      email: ev.target.value,
    });
  };

  /** Handle Phone change */
  const handlePhoneChange = (ev) => {
    setFormData({
      ...formData,
      phone: ev.target.value,
    });
  };
  const handleSubjectChange = (ev) => {
    setFormData({
      ...formData,
      subject: ev.target.value,
    });
  };
  const handleMessageChange = (ev) => {
    setFormData({
      ...formData,
      message: ev.target.value,
    });
  };

  /** Handle Terms and Conditions change */
  const handleTermsChange = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: ev.target.checked,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      termsAndConditions: false,
      companyId: companyForm.id,
      action: 'Contacto desde mi página web',
      message: '',
      subject: '',
      lastName: '...',
      meetingDate: '...',
    });
  };

  /** On toast success */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On toast error */
  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
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
      const response = await ContactFormServices.sendContactForm(
        'Página avanzada',
        formData?.name,
        formData?.email,
        formData?.phone,
        formData?.subject,
        formData?.message,
        realtorData?.email
      );

      /** Api services */
      const apiResponse = await ContactApiFormServices.addContactForm(formData);

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

  return (
    <div className="bg-secondary w-[21rem] xl:w-full xl:h-[95%] 3xl:min-h-[80vh] xl:p-2 3xl:p-8">
      <div className="text-center">
        <h2 className="text-xl xl:text-2xl 3xl:text-4xl  font-bold text-primary py-6 xl:mt-0 3xl:mt-20 px-5">
          {title}
        </h2>
      </div>
      <form name="FormSubmit" onSubmit={onFormSubmit} className="xl:py-3 3xl:py-6 xl:px-6 3xl:px-20">
        <div className="flex mb-5">
          <div className="w-full  flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              id="name"
              className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
              value={formData?.name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="flex mb-5">
          <div className="w-full flex justify-center items-center flex-col">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
              value={formData?.phone}
              onChange={handlePhoneChange}
              pattern="[0-9]{9}"
              maxLength="9"
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
        <div className="flex mb-5">
          <div className="w-full flex justify-center items-center flex-col">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Asunto"
              className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
              value={formData?.subject}
              onChange={handleSubjectChange}
            />
          </div>
        </div>
        <div className="flex mb-5">
          <div className="w-full flex justify-center items-center flex-col">
            <textarea
              name="message"
              id="message"
              placeholder="Mensaje"
              className="w-[90%] xl:w-full p-3 rounded-lg bg-white text-base text-secondary-700 placeholder:text-secondary-700 placeholder:font-normal outline-none"
              value={formData?.message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
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
          <Button
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
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
