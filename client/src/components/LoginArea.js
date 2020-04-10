import React from 'react';
import styled from '@emotion/styled';
import Container from '../components/Container';
import Logo from '../assets/Logo.svg';
import LoginInput from './LoginInput';
import Button from './Button';
import AppLogo from '../components/Logo';

const LinkToSignUp = styled.div`
  color: #28afb0;
  margin: 5px 0px;
  text-align: center;
  font-size: 20px;
`;

export const LoginArea = (props) => (
  <Container>
    <AppLogo src={Logo} alt="AppLogo" />
    <LoginInput placeholder="test@example.com" type="email" {...props} />
    <LoginInput placeholder="********" type="password" {...props} />
    <Button>Login</Button>
    <LinkToSignUp>No account yet? Sign Up</LinkToSignUp>
  </Container>
);

export default LoginArea;
