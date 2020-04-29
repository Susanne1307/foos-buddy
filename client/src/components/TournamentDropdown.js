import styled from '@emotion/styled';
import React from 'react';
import useGetTournaments from '../hooks/useGetTournaments';

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.textPrimary};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  height: 60px;
  padding: 5px;
`;

const Dropdown = styled.select`
  font-family: 'Montserrat', sans-serif;
  border: none;
  background: none;
  cursor: pointer;
  padding: 20px;
  outline: none;
  margin-left: 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

export default function TournamentDropdown() {
  const [selectedTournament, setSelectedTournament] = React.useState([]);
  const [{ tournaments, error, loading }] = useGetTournaments();

  const handleChange = (event) => {
    setSelectedTournament(event.target.value);
  };

  return (
    <>
      <DropdownWrapper>
        <Dropdown value={selectedTournament} onChange={handleChange}>
          <option disabled>Choose Tournament</option>
          {loading && '...'}
          {error && <p>ohoh</p>}
          {tournaments &&
            tournaments.map((tournament) => (
              <option key={tournament}>{tournament}</option>
            ))}
        </Dropdown>
      </DropdownWrapper>
    </>
  );
}
