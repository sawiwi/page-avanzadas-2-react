import React from "react";

const ResumeInfoAbout = ()=>{
    return(
        <>
        <div className='grid grid-cols-1 xl:grid-cols-3  px-6 xl:px-44 mb-16 xl:mb-32'>
          <div className='xl:col-span-2'>
            <img className="w-full h-[425px] object-cover"  src={'https://res.cloudinary.com/dvdb33uyj/image/upload/v1689975597/Projects/unne/img/hero/tramite2.jpg'}/>
          </div>
          <div className='xl:col-span-1'>
                <div className="text-center text-secondary-700 mt-8 mb-6 xl:mt-14 xl:mb-16" >
                    <h3 className="text-4xl">153</h3>
                    <p>Total propiedades</p>
                </div>
                <div className="text-center text-secondary-700 mb-6 xl:mb-16">
                    <h3 className="text-4xl">74</h3>
                    <p>Propiedades  vendidas</p>
                </div>
                <div className="text-center text-secondary-700 mb-6 xl:mb-16">
                    <h3 className="text-4xl">34</h3>
                    <p>Propiedades arrendadas</p>
                </div>
          </div>
        </div>
        </>
    )
}

export default ResumeInfoAbout;