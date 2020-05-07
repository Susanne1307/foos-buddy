import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from '@emotion/styled';
import FullContainer from '../components/FullContainer';
import TournamentDropdown from '../components/TournamentDropdown';
import Header from '../components/Header';
import SelectionChip from '../components/SelectionChip';
import Input from '../components/Input';
import Loader from '../components/Loader';
import FooterButton from '../components/FooterButton';
import usePostSearch from '../hooks/usePostSearch';
import { getUser } from '../api/users';

const SearchContainer = styled.form`
  top: 65px;
  display: flex;
  position: absolute;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  max-width: 350px;
`;

const H1 = styled.h1`
  font-weight: normal;
  text-align: center;
`;

const H2 = styled.h2`
  margin-bottom: 10px;
  font-weight: normal;
  width: 100%;
`;

const TournamentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ChipWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 30px;
`;

const disciplines = [
  'Open Doubles',
  'Women Doubles',
  'Senior Doubles',
  'Junior Doubles',
  'Mixed',
];

const DisciplineInfo = () => {
  // const [answer, setAnswer] = useState(null);
  return disciplines.map((discipline) => (
    <SelectionChip
      key={discipline}
      // onChange={(event) => setAnswer(event.target.value)}
    >
      {discipline}
    </SelectionChip>
  ));
};

const positions = ['Forward', 'Goalie', 'flexible', 'whatever'];

const PositionInfo = () => {
  // const [answer, setAnswer] = useState(null);
  return positions.map((position) => (
    <SelectionChip
      key={position}
      // onChange={(event) => setAnswer(event.target.value)}
    >
      {position}
    </SelectionChip>
  ));
};

const Comment = styled(Input)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  height: 200px;
  padding: 5px;
  margin-bottom: 50px;
  ::placeholder {
    top: 0px;
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 1.5rem;
    padding-left: 5px;
  }
`;

const Search = () => {
  const loggedInUserId = useContext(UserContext);
  const [tournament, setTournament] = React.useState();
  const [user, setUser] = React.useState();
  const [{ search }, doPostSearch] = usePostSearch();
  const [isLoading, setIsLoading] = React.useState(true);

  const [selectedTournament, setSelectedTournament] = React.useState();

  async function handleTournamentChange(tournament) {
    setTournament(tournament);
    try {
      const user = await getUser(loggedInUserId);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSelectedTournament(selectedTournament);
    await doPostSearch(tournament, user);
  }

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
    <>
      <FullContainer>
        <Header />
        <SearchContainer onSubmit={handleSubmit}>
          <H1>What are you looking for?</H1>
          <TournamentWrapper>
            <H2>Tournament</H2>
            <TournamentDropdown
              content={search}
              value={Object(tournament)}
              onChange={handleTournamentChange}
            />
          </TournamentWrapper>
          <ChipWrapper>
            <H2>Discipline</H2>
            <DisciplineInfo />
          </ChipWrapper>
          <ChipWrapper>
            <H2>Wanted position</H2>
            <PositionInfo />
          </ChipWrapper>
          <Comment placeholder="Additional comment..."></Comment>
          <FooterButton />
        </SearchContainer>
      </FullContainer>
    </>
  );
};

export default Search;
