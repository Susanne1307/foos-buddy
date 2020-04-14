import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/app_logo.svg';
import LoginInput from './LoginInput';
import Button from './Button';
import AppLogo from '../components/Logo';

const LoginContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 8vh;
  width: 100%;
`;

const LinkToSignUp = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0px;
  text-align: center;
  font-size: 1.3rem;
`;

const LoginArea = (props) => {
  return (
    <LoginContainer>
      <AppLogo src={logo} alt="AppLogo" />
      <LoginInput placeholder="test@example.com" type="email" {...props} />
      <LoginInput placeholder="********" type="password" {...props} />
      <Button>Login</Button>
      <LinkToSignUp>No account yet? Sign Up</LinkToSignUp>
    </LoginContainer>
  );
};

export default LoginArea;
