import React from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

const UserProvider = (props) => {
  const token = localStorage.getItem('loggedInUserToken');
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace('-', '+').replace('_', '/');
  let decodedData = JSON.parse(
    Buffer.from(base64, 'base64').toString('binary')
  );
  const loggedInUserId = decodedData.userId;

  return (
    <UserContext.Provider value={[loggedInUserId]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node,
};
