import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { iconsList } from '../Icons';

const NavigationItem = ({ menuItem }) => {
  const { pathname } = useLocation();
  const { name, href, children } = menuItem;
  const { IoIosArrowDown } = iconsList;

  return children?.length > 0 ? (
    <Popover className="relative">
      {({ open }) => (
        <Fragment>
          <Popover.Button className="inline-flex items-center text-sm xl:text-lg font-medium outline-none py-2 px-4 xl:px-5 rounded-full  text-slate-800 hover:bg-slate-100 hover:text-slate-900">
            <span>{name}</span>
            <IoIosArrowDown className="ml-2 h-4 w-5 text-slite-300 transition duration-150 ease-in-out group-hover:text-opacity-80" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-56 border-0 rounded-xl max-w-56  -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            {({ close }) => (
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-50 ">
                <div className="relative grid gap-1 p-2 px-2 lg:grid-cols-1 bg-white w-auto rounded-xl font-customFont ">
                  {children?.map(({ name, href }) => (
                    <Link
                      key={name}
                      to={href}
                      target={href === '/propiedades' ? '/propiedades' : ''}
                      className={`${
                        pathname === href
                          ? ' text-primary font-customFont flex items-center  rounded-lg transition duration-150 ease-in-out  focus:outline-none focus-visible:ring'
                          : 'flex items-center rounded-lg transition duration-150 ease-in-out  focus:outline-none focus-visible:ring'
                      }`}
                      onClick={async () => {close()}}
                    >
                      <div className="ml-3">
                        <p className="text-md py-2 font-medium font-customFont ">{name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              )}
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  ) : (
    <Link
      to={href}
      target={href === 'https://unne.prop360.cl/' ? '_blank' : '' || href === 'https://demo-landing-1.unne.cl/' ? 'blank' : ''}
      className={`${
        pathname === href
          ? ' text-primary inline-flex items-center text-sm xl:text-sm font-medium py-2 px-4 xl:px-5 rounded-full font-customFont uppercase'
          : name === 'Intranet'
          ? ' inline-flex items-center text-sm xl:text-md font-medium py-2 px-4 xl:px-3 3xl:px-5 rounded-full text-primary bg-secondary uppercase font-customFont'
          : 'inline-flex items-center text-sm xl:text-md font-medium  xl:font-medium py-2 px-4 xl:px-3 3xl:px-5 rounded-full text-secondary hover:text-secondary-700 font-customFont uppercase'
      }`}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
