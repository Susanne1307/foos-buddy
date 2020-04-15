import React from 'react';
import AuthenticationContainer from '../components/AuthenticationContainer';
import logo from '../assets/app_logo.svg';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from '../components/Logo';

const RegisterForm = (props) => {
  return (
    <AuthenticationContainer>
      <AppLogo src={logo} alt="AppLogo" />
      <AuthenticationInput placeholder="Your e-mail" type="email" {...props} />
      <AuthenticationInput
        placeholder="Your password"
        type="password"
        {...props}
      />
      <AuthenticationInput
        placeholder="Verify password"
        type="password"
        {...props}
      />
      <Button>Sign up!</Button>
    </AuthenticationContainer>
  );
};

export default RegisterForm;
