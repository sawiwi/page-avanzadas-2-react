import React, { useState } from 'react';
import LinkFab from './LinkFab';
import { iconsList } from '../Icons';
import {realtorData} from '../../constants/consts/realtor';

const Fab = () => {
  const { AiOutlinePlus, AiOutlineWhatsApp } = iconsList;
  const {phone} = realtorData
  const phoneNumber = phone;
  const whatsappBusinessLink = `https://wa.me/${phoneNumber}`;

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const hoverEffect = `hover:scale-105`;
  const buttonAnimate = `animate-heart`;
  return (
    <div className="select-none">
      <div
        className={`fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-secondary-700 drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all ${hoverEffect} ${buttonAnimate}`}
       
      >
        <div
          className={`transition-all duration-300 `}
        >
          {/* <AiOutlinePlus size="1.7rem" className='text-secondary' /> */}
          <LinkFab
          href={whatsappBusinessLink}
          IconComponent={AiOutlineWhatsApp}
          className='text-secondary-800'
          iconColor="#f2f2d6"

        />
          
        </div>
      </div>
      {/* <div
        className={`fixed  right-8 rounded-full w-[60px] z-10 flex flex-col-reverse items-center gap-3 transition-all duration-500 transform ${
          isOpen ? 'bottom-28' : '-bottom-36 opacity-0'
        }`}
      >
        <LinkFab
          href={whatsappBusinessLink}
          IconComponent={AiOutlineWhatsApp}
          iconColor="#2BD469"
          bgColor="bg-white"
        />
      </div> */}
    </div>
  );
};

export default Fab;
