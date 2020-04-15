import React from 'react';
import LoginInput from '../components/LoginInput';
import ProfileInput from '../components/ProfileInput';

export default {
  title: 'Input',
  component: 'Input',
};

export const MailLogin = (props) => (
  <LoginInput placeholder="test@example.com" type="email" {...props} />
);
export const PasswordLogin = (props) => (
  <LoginInput placeholder="********" type="password" {...props} />
);
export const NameInput = () => <ProfileInput placeholder="Name" />;
