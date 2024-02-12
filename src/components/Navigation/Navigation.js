import React from 'react';
import NavigationItem from './NavigationItem';
import { navigationData } from '../../data/navigation';

const Navigation = () => {
  return (
    <ul className="absolute lg:w-full xl:left-[270px] 3xl:left-[550px] lg:flex lg:flex-wrap lg:items-center lg:space-x-8 xl:space-x-5 p-2">
      {navigationData?.length > 0 &&
        navigationData.map((item) => (
          <NavigationItem key={item?.id} menuItem={item} />
        ))}
    </ul>
  );
};

export default Navigation;
