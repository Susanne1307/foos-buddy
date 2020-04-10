import React from 'react';
import { LoginInput } from '../components/Input';

export default {
  title: 'LoginInput',
};

export const MailLogin = (props) => (
  <LoginInput placeholder="test@example.com" type="email" {...props} />
);
export const PasswordLogin = (props) => (
  <LoginInput placeholder="********" type="password" {...props} />
);
export const MailSignUp = (props) => (
  <LoginInput placeholder="Your mail" type="email" {...props} />
);
export const PasswordSignUp = (props) => (
  <LoginInput placeholder="Your password" type="password" {...props} />
);
export const VerifyPassword = (props) => (
  <LoginInput placeholder="Verify Password" type="password" {...props} />
);
