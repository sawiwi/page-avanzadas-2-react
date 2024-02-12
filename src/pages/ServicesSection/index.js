import React, { Fragment, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import ViewServices from "./components/ViewServices";


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
        <ViewServices/>        
        </Fragment>
    );
}

export default Services;