import React from 'react';
import { Link } from 'react-router-dom';
import UnneLogo from '../../assets/img/logo/unne-logo.png';
import UnneLogoSvg from '../Icons/custom/unneLogo';

const Logo = () => {
  return (
    // <Link to="/">
    //   {UnneLogo && (
    //     <UnneLogoSvg></UnneLogoSvg>
    //   )}
    // </Link>
    <Link
    href="/"
    to="/"
    className="text-[30px]  xl:text-[50px] text-start  xl:text-start  text-secondary-700 font-bold font-customFont hover:text-secondary-grey duration-200"
  >
    LOGO
  </Link>
  );
};

export default Logo;
