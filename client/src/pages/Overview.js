import React from 'react';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { useGetSearches } from '../hooks/useGetSearches';
import { searchListAnimation } from '../animations/slideIn';
import date_icon from '../assets/date.svg';

const SearchList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: absolute;
  top: 65px;
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: space-around;

  > * {
    margin: 10px;
  }
  :nth-of-type(1) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.3s;
    background: ${(props) => props.theme.colors.secondary};
    opacity: 0;
  }
  :nth-of-type(2) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.5s;
    opacity: 0;
  }
  :nth-of-type(3) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.7s;
    background: ${(props) => props.theme.colors.secondary};
    opacity: 0;
  }
  :nth-of-type(4) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.9s;
    opacity: 0;
  }
  :nth-of-type(5) {
    animation: ${searchListAnimation} 0.8s ease forwards 1.1s;
    background: ${(props) => props.theme.colors.secondary};
    opacity: 0;
  }
  :nth-of-type(6) {
    animation: ${searchListAnimation} 0.8s ease forwards 1.3s;
    opacity: 0;
  }
`;

const SearchInfos = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 80%;
`;

const SearchPicture = styled.img`
  border-radius: 10%;
  align-self: center;
  width: 20%;
`;

const Name = styled.p`
  margin: 5px 5px 5px 0px;
  font-weight: bold;
`;

const Tournament = styled.div`
  padding-left: 30px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const FurtherDetails = styled.div`
  text-indent: 2rem;
  margin: 2px;
`;

const Message = styled.div`
  font-style: italic;
  text-indent: 2rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default function Overview() {
  const [{ searches, error, loading }] = useGetSearches();
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(function () {
    setIsLoading(false);
  }, 800);

  if (isLoading) {
    return (
      <FullContainer>
        <Loader />
      </FullContainer>
    );
  }

  return (
    <FullContainer>
      <Header />
      <SearchList>
        {loading && <Loader />}
        {error && 'Error'}
        {searches &&
          searches.map((search) => (
            <SearchSection key={search._id}>
              <SearchPicture src={search.user ? search.user.player.img : ''} />
              <SearchInfos>
                <Name>{search.user ? search.user.player.name : ''}</Name>
                <Tournament src={date_icon}>{search.tournament}</Tournament>
                <FurtherDetails>- {search.discipline}</FurtherDetails>
                <FurtherDetails>- {search.position}</FurtherDetails>
                <Message>{search.message}</Message>
              </SearchInfos>
            </SearchSection>
          ))}
      </SearchList>
    </FullContainer>
  );
}
