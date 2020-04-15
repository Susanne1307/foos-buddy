import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/app_logo.svg';
import AuthenticationContainer from '../components/AuthenticationContainer';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from './Logo';

const LinkToSignUp = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0px;
  text-align: center;
  font-size: 1.3rem;
`;

const LoginForm = (props) => {
  return (
    <AuthenticationContainer>
      <AppLogo src={logo} alt="AppLogo" />
      <AuthenticationInput
        placeholder="test@example.com"
        type="email"
        {...props}
      />
      <AuthenticationInput placeholder="********" type="password" {...props} />
      <Button>Login</Button>
      <LinkToSignUp>No account yet? Sign Up</LinkToSignUp>
    </AuthenticationContainer>
  );
};

export default LoginForm;
