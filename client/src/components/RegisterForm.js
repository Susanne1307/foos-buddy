import React from 'react';
import AuthenticationContainer from '../components/AuthenticationContainer';
import logo from '../assets/app_logo.svg';
import AuthenticationInput from './AuthenticationInput';
import Button from './Button';
import AppLogo from '../components/Logo';
import createUser from '../api/users';

function RegisterForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    await createUser(user);
  }

  return (
    <AuthenticationContainer onSubmit={handleSubmit}>
      <AppLogo src={logo} alt="AppLogo" />
      <AuthenticationInput
        placeholder="Your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <AuthenticationInput
        placeholder="Your e-mail"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <AuthenticationInput
        placeholder="Your password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button>Sign up!</Button>
    </AuthenticationContainer>
  );
}

export default RegisterForm;
