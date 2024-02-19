import React, { Fragment, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import ViewServices from "./components/ViewServices";
import Header from "../../components/Header/Header";


const Services = () => {
     const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/servicios') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [location.pathname]);

    return(
        <Fragment>
          <Head title="Servicios" />
          <div className="z-0 inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32">
              <Header/>
          </div>
          <ViewServices/>        
  
        </Fragment>
    );
}

export default Services;