import React from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';
import Logout from '../pages/Logout';

const UserProvider = (props) => {
  const token = localStorage.getItem('loggedInUserToken');
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedData = JSON.parse(
      Buffer.from(base64, 'base64').toString('binary')
    );
    const loggedInUserId = decodedData.userId;

    return (
      <UserContext.Provider value={loggedInUserId}>
        {props.children}
      </UserContext.Provider>
    );
  } catch (err) {
    return <Logout />;
  }
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node,
};
