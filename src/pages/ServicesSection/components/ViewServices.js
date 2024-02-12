import React, {useState} from "react";
import Section from "../../../components/Section/Section";
import { CardServicesData } from "../../../data";
import Button from "../../../components/Button/Button";
import ViewPublicWithUs from "./SectionPublicUs";
import { Fade } from 'react-awesome-reveal';
import BankingAdvice from "./BankingAdvice";

const ViewServices = () =>{

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }
    
    return (
        <Section>
             <div className="container px-8 3xl:px-24"> 
                <div className="mt-16 3xl:mt-28 my-10 flex border-l-4 h-6 3xl:h-9 border-secondary-700 ">
                    <h2 className=" text-secondary-700 text-2xl xl:text-3xl ml-2 uppercase">Servicios</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 3xl:mb-16 ">
                    {CardServicesData ? CardServicesData.map((item, idx) => {
                        return(
                        <div className="col-span-1 hover:scale-105 duration-300" key={idx}>
                            <div className="card shadow-xl bg-secondary p-2 rounded-md h-[15rem] 3xl:min-h-[18.5rem]">
                                <div className="mt-2 3xl:mt-6 py-2 3xl:py-5 text-5xl 3xl:text-6xl text-primary flex justify-center">
                                    {item.icon} 
                                </div>
                                <div className="py-2 mt-2">
                                    <h2 className="text-primary text-center text-xl">{item.title}</h2>
                                </div>
                                <div className="card-body">
                                    { item.button ? <button  onClick={toggleForm} className="bg-primary text-secondary-800 p-2 text-base font-medium rounded-md">
                                                    Completar formulario
                                            </button> : 
                                            <button onClick={toggleForm} className="bg-primary text-secondary-800 p-2 text-base font-medium rounded-md">
                                                Ver más
                                            </button>}
                                  
                                </div>
                            </div>
                        </div>
                        )
                    }):''
                }
                </div>
                {showForm ? ( 
                        <Fade delay={300} direction="right" triggerOnce={true}>
                           <ViewPublicWithUs/>
                       </Fade>
                ):<Fade delay={300} direction="left" triggerOnce={true}>
                        <BankingAdvice/>
                    </Fade>}
        
             </div>
        </Section>
    )
}

export default ViewServices;