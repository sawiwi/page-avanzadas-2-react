import React, { Fragment, useEffect } from "react";
import Head from "../../components/Head/Head";
import { useLocation } from "react-router-dom";
import ViewContact from "./components/ViewContact";

const Contact = () =>{
   const location = useLocation();
   useEffect(() =>{
    if (location.pathname === '/contacto') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
   },[location.pathname]) 

    return(
    <Fragment>
        <Head title="Contacto"/>
        <ViewContact/>
    </Fragment>
    )
}

export default Contact;