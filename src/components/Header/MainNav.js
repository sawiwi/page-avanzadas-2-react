import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MenuBar from '../MenuBar/MenuBar';

const MainNav = () => {
  return (
    <div className="relative z-10">
      <div className="relative  p-4 flex  items-center space-x-1 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-1 sm:space-x-8 lg:space-x-10">
          <Logo />
        </div>

        <div className="flex-shrink-0 flex items-center justify-end  text-secondary-700 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <Navigation />
          </div>
        </div>

        <div className="flex items-center xl:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
