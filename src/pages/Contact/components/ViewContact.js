import React from "react";
import Section from "../../../components/Section/Section";
import FormContact from "../../../components/Form/FormContact";
import InfoContact from "./InfoContact";
const ViewContact = () =>{
    return(
        <Section>
            <div className="container">
                <div className="grid  grid-cols-1 xl:grid-cols-2 px-2 xl:px-44">
                    <div className="col-span-1">
                        <InfoContact />
                    </div>
                    <div className="col-span-1">
                        <FormContact title={"Formulario de contacto"}/>
                    </div>
                </div>
                
            </div>
        </Section>
    )

}

export default ViewContact;