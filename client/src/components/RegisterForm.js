import React from 'react';
import AuthenticationContainer from '../components/AuthenticationContainer';
import logo from '../assets/app_logo.svg';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from '../components/Logo';
import { useHistory } from 'react-router-dom';
import { createUser, loginUser } from '../api/users';
import { AccountRequest, StyledRequestLink } from '../components/LoginForm';

function RegisterForm() {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        setTimeout(function () {
          history.push(`/profile`);
        }, 500);
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
}

export default RegisterForm;
