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
                <div className="mt-16 3xl:mt-28 my-10 xl:mb-14 flex justify-start">
                    <h2 className=" text-secondary-700 text-2xl xl:text-4xl ml-2 uppercase">Servicios</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:mb-20 3xl:mb-16 xl:px-20">
                    {CardServicesData ? CardServicesData.map((item, idx) => {
                        return(
                        <article className="col-span-1 hover:scale-105 duration-300" key={idx}>
                            <div className="card shadow-xl bg-gray-300 p-4 rounded-sm  h-full xl:h-[20rem] 3xl:min-h-[18.5rem] xl:w-[29rem] 3xl:w-[32rem]">
                                <div className="grid grid-cols-1 xl:grid-cols-3">
                                    <div className="xl:col-span-1 xl:px-3">
                                        <div className="mt-2 xl:mt-5 3xl:mt-6 py-2 xl:py-6 3xl:py-5 text-5xl 3xl:text-6xl text-secondary flex justify-center xl:h-28 bg-primary shadow-xl">
                                            {item.icon} 
                                        </div>
                                    </div>
                                    <div className="xl:col-span-2 xl:px-3">
                                        <div className="py-2 mt-2">
                                            <h2 className="text-secondary text-start text-xl">{item.title}</h2>
                                        </div>
                                        <div className="py-2 mt-2">
                                            <p className="text-secondary text-start text-sm">{item.description}</p>
                                        </div>
                                        <div className="card-body">
                                            { item.button ? <button  onClick={toggleForm} className="bg-secondary text-primary p-2 text-base font-medium rounded-full">
                                                            Completar formulario
                                                    </button> : ''
                                                  }
                                        
                                        </div>
                                    </div>
                                </div>
                              
                 
                            </div>
                        </article>
                        )
                    }):''
                }
                </div>
                {showForm ? ( 
                        <Fade delay={300} direction="right" triggerOnce={true}>
                           <ViewPublicWithUs/>
                       </Fade>
                ):''
                }
                {/* // <Fade delay={300} direction="left" triggerOnce={true}>
                //         <BankingAdvice/>
                //     </Fade> */}
        
             </div>
        </Section>
    )
}

export default ViewServices;