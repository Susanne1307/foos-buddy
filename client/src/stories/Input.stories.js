import React from 'react';
import AuthenticationInput from '../components/AuthenticationInput';

export default {
  title: 'Input',
  component: 'Input',
};

export const MailLogin = (props) => (
  <AuthenticationInput placeholder="test@example.com" type="email" {...props} />
);
export const PasswordLogin = (props) => (
  <AuthenticationInput placeholder="********" type="password" {...props} />
);
