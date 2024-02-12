import React from 'react';

const HeadingSection = ({ title, subtitle }) => {
  return (
    <div className="text-center my-8 md:my-12 xl:my-14">
      <h2 className="text-2xl xl:text-3xl font-extrabold text-secondary-800 font-customFont">{title}</h2>
      <h3 className="text-lg my-2 xl:text-3xl font-medium text-primary font-customFont">
        {subtitle}
      </h3>
    </div>
  );
};

export default HeadingSection;
