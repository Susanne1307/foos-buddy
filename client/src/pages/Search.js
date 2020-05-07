import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import theme from '../theme';

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

const Message = styled(Input)`
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

const disciplines = [
  'Open Doubles',
  'Women Doubles',
  'Mixed',
  'Senior Doubles',
  'Junior Doubles',
];

const positions = ['Forward', 'Goalie', 'whatever'];

const Search = () => {
  const loggedInUserId = useContext(UserContext);
  const [tournament, setTournament] = useState();
  const [selectedTournament, setSelectedTournament] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();
  const [{ search }, doPostSearch] = usePostSearch();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

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
    setSelectedDiscipline(selectedDiscipline);
    setSelectedPosition(selectedPosition);
    setMessage(message);
    await doPostSearch(
      user,
      tournament,
      selectedDiscipline,
      selectedPosition,
      message
    );
    history.push(`/overview`);
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
            {disciplines &&
              disciplines.map((discipline) => (
                <SelectionChip
                  name={discipline}
                  value={discipline}
                  key={discipline}
                  onClick={() => {
                    setSelectedDiscipline(discipline);
                  }}
                  style={{
                    background:
                      selectedDiscipline === discipline
                        ? theme.colors.primary
                        : 'none',
                  }}
                >
                  {discipline}
                </SelectionChip>
              ))}
          </ChipWrapper>
          <ChipWrapper>
            <H2>Wanted position</H2>
            {positions &&
              positions.map((position) => (
                <SelectionChip
                  name={position}
                  value={position}
                  key={position}
                  onClick={() => {
                    setSelectedPosition(position);
                  }}
                  style={{
                    background:
                      selectedPosition === position
                        ? theme.colors.primary
                        : 'none',
                  }}
                >
                  {position}
                </SelectionChip>
              ))}
          </ChipWrapper>
          <Message
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            placeholder="Additional comment..."
          ></Message>
          <FooterButton />
        </SearchContainer>
      </FullContainer>
    </>
  );
};

export default Search;
