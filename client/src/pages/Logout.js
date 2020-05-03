import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import Button from '../components/Button';

const LogoutMessage = styled.p`
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const LoginAgain = styled(Button)`
  font-size: 1.2rem;
  box-shadow: 0px 1px 2px ${(props) => props.theme.colors.shadow};
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Logout = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/login`);
  };
  return (
    <FullContainer>
      <LogoutMessage>You have been successfully logged out</LogoutMessage>
      <LoginAgain onClick={handleClick}>Log in again?</LoginAgain>
    </FullContainer>
  );
};

export default Logout;
