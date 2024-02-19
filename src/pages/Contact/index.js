import React, { Fragment, useEffect } from "react";
import Head from "../../components/Head/Head";
import { useLocation } from "react-router-dom";
import ViewContact from "./components/ViewContact";
import Header from "../../components/Header/Header";

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
        <div className="z-0 inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32">
            <Header/>
        </div>
        <ViewContact/>
    </Fragment>
    )
}

export default Contact;