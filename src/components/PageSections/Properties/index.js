import React, { Fragment, useState } from 'react';
import Properties from './components/Properties';

const PropertiesComponent = () => {
  const [isGrid, setIsGrid] = useState(true);
  // const [isList, setIsList] = useState(false);
  const [isMap, setIsMap] = useState(false);
  return (
    <Fragment>
      <Properties {...{ isGrid, setIsGrid, isMap, setIsMap }} />
    </Fragment>
  );
};

export default PropertiesComponent;
