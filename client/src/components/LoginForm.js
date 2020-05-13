import React, { useState } from 'react';
import styled from '@emotion/styled';
import logo from '../assets/app_logo.svg';
import AuthenticationContainer from '../components/AuthenticationContainer';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from './Logo';
import FullContainer from '../components/FullContainer';
import { AccountConfirmation } from '../components/RegisterForm';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api/users';

export const AccountRequest = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0px;
  text-align: center;
  font-size: 1.3rem;
  width: 100%;
`;

export const StyledRequestLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0px;
  text-align: center;
  font-size: 1.3rem;
  -webkit-tap-highlight-color: transparent;
`;

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email,
      password,
    };
    try {
      const response = await loginUser(user);
      if (response) {
        setLoggingIn(!loggingIn);
        setTimeout(function () {
          history.push(`/profile`);
        }, 1000);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  if (loggingIn)
    return (
      <AuthenticationContainer onSubmit={handleSubmit}>
        <AppLogo src={logo} alt="AppLogo" />
        <AuthenticationInput
          placeholder="test@example.com"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <AuthenticationInput
          placeholder="********"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button>Login</Button>
        <AccountRequest>
          No account yet?
          <br />
          <StyledRequestLink href="/register">Sign Up!</StyledRequestLink>
        </AccountRequest>
      </AuthenticationContainer>
    );

  return (
    <FullContainer>
      <AccountConfirmation>
        Logged in{' '}
        <span aria-label="success" role="img">
          🎉
        </span>
      </AccountConfirmation>
    </FullContainer>
  );
};

export default LoginForm;
