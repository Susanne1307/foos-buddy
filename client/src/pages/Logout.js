import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import Button from '../components/Button';
import fadeIn from '../animations/fadeIn';

const LogoutMessage = styled.p`
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const LoginAgain = styled(Button)`
  font-size: 1.2rem;
  box-shadow: 0px 1px 2px ${(props) => props.theme.colors.shadow};
  animation: ${fadeIn} 2s ease 1 forwards;
`;

const Logout = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/login`);
  };

  setTimeout(function () {
    setIsLoading(false);
  }, 800);

  if (isLoading) {
    return <FullContainer></FullContainer>;
  }
  return (
    <FullContainer>
      <LogoutMessage>You have been successfully logged out</LogoutMessage>
      <LoginAgain onClick={handleClick}>Log in again?</LoginAgain>
    </FullContainer>
  );
};

export default Logout;
