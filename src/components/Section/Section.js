import React from 'react';

const Section = ({ children, className }) => {
  const defaultSectionClass = 'relative px-4 my-8 md:my-14 xl:my-8 xl:px-16 3xl:px-24';

  return (
    <section className={`${defaultSectionClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
