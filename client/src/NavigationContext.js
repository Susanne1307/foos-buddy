import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = createContext();

export const NavigationProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavigationContext.Provider value={[showMenu, setShowMenu]}>
      {props.children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node,
};
