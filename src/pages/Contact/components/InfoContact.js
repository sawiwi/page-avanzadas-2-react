import React from "react";
import { realtorData, timeData } from "../../../constants/consts/realtor";
import { iconsList } from "../../../components/Icons";

const InfoContact = () =>{
    const {BiMap, AiFillPhone, FiMail, BsFillCalendarCheckFill} = iconsList
    const {address, email, phone} = realtorData
    const {daysWeek, weekend, times, timesWeekend} = timeData
    return(
        <div className="bg-secondary bg-opacity-30  w-[21rem]  xl:w-full xl:h-[95%] 3xl:min-h-[80vh]">
            <img src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690907896/Projects/unne/img/Quiero%20arrendar/QUIERO_ARRENDAR__Arrienda_tu_propiedad_sin_complicaciones_ieiurk.webp" alt="" className="object-cover bg-center bg-no-repeat bg-cover brightness-100  h-[400px] xl:h-[80vh] xl:w-[100vw] "/>
            <div className="absolute left-[1.5rem] xl:left-[19rem]  3xl:left-[19rem] h-[25rem]  xl:h-[95%] 3xl:h-[80vh] inset-0 w-[21rem] xl:w-[30%] 3xl:w-[35%] pl-4 pt-5 xl:pl-14 3xl:pl-24 bg-secondary bg-opacity-50 hover:backdrop-blur-sm duration-500 ">
                <div className="flex flex-col ">
                    <h2 className=" relative xl:text-center text-2xl font-bold xl:text-2xl 3xl:text-4xl uppercase pb-2  mb-2 text-white drop-shadow-lg xl:mt-20 3xl:mt-36 3xl:px-20">
                    Contáctanos 
                  </h2>
                </div>
                <ul className="text-start list-none">
                    <li className="flex items-center mb-5 text-white font-medium text-lg font-customFont"><BiMap className="w-12 3xl:h-6"/>{address}</li>
                    <li className="flex items-center  mb-5 text-white font-medium text-lg font-customFont"><AiFillPhone className="w-12 3xl:h-6"/>{phone}</li>
                    <li className="flex items-center  mb-5 text-white font-medium text-lg font-customFont"><FiMail className="w-12 3xl:h-6"/>{email}</li>
                </ul>

                <ul>
                    <li className=" flex items-center mb-5 text-white font-medium text-lg font-customFont"><BsFillCalendarCheckFill className="w-12 3xl:h-6"/>{daysWeek} {times}</li>
                    <li className="flex items-center mb-5 text-white font-medium text-lg font-customFont"><BsFillCalendarCheckFill className="w-12 3xl:h-6"/>{weekend} {timesWeekend}</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoContact;