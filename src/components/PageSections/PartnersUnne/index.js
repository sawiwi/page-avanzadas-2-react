import React, { Fragment, useState } from 'react';
import Partners from './components/Partners';

const PartnersComponent = () => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <Fragment>
      <Partners {...{ isGrid, setIsGrid }} />
    </Fragment>
  );
};

export default PartnersComponent;