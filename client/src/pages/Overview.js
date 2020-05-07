import React from 'react';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { useGetSearches } from '../hooks/useGetSearches';
import { searchListAnimation } from '../animations/slideIn';

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
  opacity: 0;
  :nth-of-type(1) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.3s;
    background: ${(props) => props.theme.colors.secondary};
  }
  :nth-of-type(2) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.5s;
  }
  :nth-of-type(3) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.7s;
    background: ${(props) => props.theme.colors.secondary};
  }
  :nth-of-type(4) {
    animation: ${searchListAnimation} 0.8s ease forwards 0.9s;
  }
  :nth-of-type(5) {
    animation: ${searchListAnimation} 0.8s ease forwards 1.1s;
    background: ${(props) => props.theme.colors.secondary};
  }
  :nth-of-type(6) {
    animation: ${searchListAnimation} 0.8s ease forwards 1.3s;
  }
`;

const SearchInfos = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: space-evenly;
  margin: auto;
  width: 75%;
`;

const SearchPicture = styled.img`
  border-radius: 10%;
  width: 25%;
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
                <div>{search.user ? search.user.player.name : ''}</div>
                <div>{search.tournament}</div>
              </SearchInfos>
            </SearchSection>
          ))}
      </SearchList>
    </FullContainer>
  );
}
