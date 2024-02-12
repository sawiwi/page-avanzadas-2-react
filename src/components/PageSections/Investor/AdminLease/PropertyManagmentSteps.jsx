import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { propertyManagmentData } from '../../../../data/index';
import Button from '../../../Button/Button';

/** Components */
import StepsPlan from '../../../Card/StepsPlan';
const PropertyManagmentSteps = () => {
  return (
    <Fragment>
      <div className="flex items-center">
        <div className="flex-1 border-b border-gray-200"></div>
        <div className="mx-3 text-gray-800 font-bold text-2xl text-center">
          Administra tu propiedad en simples pasos
        </div>
        <div className="flex-1 border-b border-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {propertyManagmentData.map((item) => (
          <StepsPlan key={item.id} data={item} backgroundColor="bg-white" />
        ))}
      </div>
    </Fragment>
  );
};
export default PropertyManagmentSteps;
