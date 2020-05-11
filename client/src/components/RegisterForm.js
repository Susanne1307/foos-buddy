import React from 'react';
import styled from '@emotion/styled';
import AuthenticationContainer from '../components/AuthenticationContainer';
import logo from '../assets/app_logo.svg';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from '../components/Logo';
import FullContainer from '../components/FullContainer';
import { useHistory } from 'react-router-dom';
import { createUser, loginUser } from '../api/users';
import { AccountRequest, StyledRequestLink } from '../components/LoginForm';

export const AccountConfirmation = styled.div`
  font-size: 1.7rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

function RegisterForm() {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [createAccount, setCreateAccount] = React.useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      email,
      password,
    };
    try {
      const response = await createUser(user);
      if (response) {
        alert('Account created and logged in 🤗');
        loginUser(user);
        setCreateAccount(!createAccount);
        setTimeout(function () {
          history.push(`/profile`);
        }, 1500);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  if (createAccount)
    return (
      <AuthenticationContainer onSubmit={handleSubmit}>
        <AppLogo src={logo} alt="AppLogo" />

        <AuthenticationInput
          placeholder="your e-mail"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <AuthenticationInput
          placeholder="your password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button>Sign up!</Button>
        <AccountRequest>
          or
          <StyledRequestLink href="/login"> Login</StyledRequestLink>
        </AccountRequest>
      </AuthenticationContainer>
    );

  return (
    <FullContainer>
      <AccountConfirmation>
        Account created and logged in{' '}
        <span aria-label="success" role="img">
          🎉
        </span>
      </AccountConfirmation>
    </FullContainer>
  );
}

export default RegisterForm;
