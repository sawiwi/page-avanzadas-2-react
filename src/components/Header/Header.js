import React from 'react';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 px-4 z-50 xl:px-32 border-b bg-transparent  2xl:border-none ">
      <MainNav />
    </header>
  );
};

export default Header;
