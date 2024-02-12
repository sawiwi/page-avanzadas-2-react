import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Footer = () => (
  <footer className="bg-primary-700 pt-10 pb-20 xl:px-28">
    <div className="flex flex-wrap  mx-4 lg:mx-0">
      <div className="w-full h-full flex justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12 xl:w-3/12 3xl:w-4/12">
        <div className="w-5/6">
          <Link
            href="/"
            to={""}
            className="w-96 py-2 text-xl text-center my-6 text-secondary-700 font-semibold font-customFont hover:text-secondary-opacity duration-200"
          >
            CONTACTO
          </Link>
          <div className="h-56">
            <p className="text-md text-secondary-700 mt-5 mb-5 font-customFont">
              <span className="font-bold text-secondary-800 font-customFont">Dirección:</span>{' '}
              Asturias 171, Of. 101, Las Condes, Santiago
            </p>
            <p className="text-md text-secondary-700 mt-1 mb-5 font-customFont">
              <span className="font-bold text-secondary-800 font-customFont">Teléfono:</span> +56
              264653732
            </p>

            <p className="text-md text-secondary-700 mt-2 font-customFont">
              <span className="font-bold text-secondary-800 font-customFont">Correo:</span>{' '}
              contacto@unne.cl
            </p>  
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 xl:w-3/12 3xl:w-2/12">
        <div className="w-5/6">
          <Link
            href="/"
            to=""
            className="w-96 py-2 text-xl text-center my-3 font-customFont text-secondary-700 font-semibold hover:text-secondary-opacity duration-200"
          >
            MENÚ
          </Link>
          <div className="h-48">
            <ul className="text-md text-gray-900 mt-5">
              <li className='mb-3'>
                <Link
                  to="/quienes-somos"
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Nosotros
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  to="/soy-propietario/quiero-vender"
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Propiedades
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  to="/eres-corredor/asociate"
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Servicios
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  to="/soy-inversionista/unidades-en-remate"
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Contacto
                </Link>
              </li>
              <li className='mb-3'>
                <Link
                  to="/soy-inversionista/unidades-en-remate"
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Publica gratis
                </Link>
              </li>
              <li className='mb-3'>
                <a
                  href="https://unne.prop360.cl/backoffice"
                  target='_blank'
                  className="hover:underline underline-offset-4 decoration-secondary text-secondary-700 font-customFont"
                >
                  Intranet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-12 xl:mt-0 justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-3/12 xl:w-3/12">
        <div className="w-5/6">
          <Link
            href="/"
            to=""
            className="w-96 py-2 text-xl text-center my-6 text-secondary-700 font-semibold hover:text-secondary-opacity duration-200 font-customFont"
          >
            DESCUBRE
          </Link>
          <div className="d-flex flex-col text-md text-secondary-700 mt-1">
              <div className="flex justify-start items-center my-3">
                <a
                  href="https://www.facebook.com/unnechile?mibextid=ZbWKwL/"
                  target='_blank'
                  className="text-dark bg-primary-400 text-secondary hover:bg-secondary-opacity hover:border-secondary mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-secondary hover:text-primary duration-300 sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 8 16"
                    className="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/unne.cl/"
                  target='_blank'
                  className="text-dark bg-primary-400 text-secondary hover:bg-secondary-opacity hover:border-secondary mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-secondary hover:text-primary duration-300 sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  {/* <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    className="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg> */}
                  <svg width="20" height="15" className="fill-current" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/" preserveAspectRatio="xMidYMid">
                      <g>
                          <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"></path>
                      </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/unnecl/"
                  target='_blank'
                  className="text-dark bg-primary-400 text-secondary hover:bg-secondary-opacity hover:border-secondary mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-secondary hover:text-primary duration-300 sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" className="fill-current" viewBox="0 5 1036 990">
                    <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full h-full mt-10 mb-10 mx-10 xl:mx-0 xl:mt-0 sm:w-1/2 xl:w-2/12 3xl:w-2/12 3xl:my-14 ">
        <div className="w-5/6">
          <Link
            href="/"
            to=""
            className="w-96 py-2 px-2 text-[80px] xl:px-0 xl:text-[90px] 3xl:text-[120px] text-center  text-secondary-700 font-bold font-customFont hover:text-secondary-opacity duration-200"
          >
            LOGO
          </Link>
        </div>
      </div>
    </div>
    <hr className='border-secondary-opacity w-full'/>
    <div className="flex flex-wrap justify-end mx-4 lg:mx-0">
       <p className="text-sm text-secondary-700 mt-2 font-customFont">
          <span className="font-semibold text-secondary-800 ">©</span>{' '}
          TODOS LOS DERECHOS RESERVADOS.
        </p>  
    </div>
  </footer>
);

export default Footer;
