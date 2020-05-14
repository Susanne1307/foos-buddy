import React, { useState } from 'react';
import NavigationContext from './NavigationContext';
import PropTypes from 'prop-types';

const NavigationProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavigationContext.Provider value={[showMenu, setShowMenu]}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

NavigationProvider.propTypes = {
  children: PropTypes.node,
};
