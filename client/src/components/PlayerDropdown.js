import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useGetPlayers } from '../hooks/useGetPlayers';

const Dropdown = styled.select`
  max-width: 90%;
  border: none;
  border-radius: 0px;
  border-bottom: 3px ${(props) => props.theme.colors.tertiary} solid;
  background: none;
  cursor: pointer;
  padding: 10px;
  outline: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: 'Montserrat', sans-serif;
`;

const DropdownList = styled.option`
  font-family: 'Montserrat', sans-serif;
`;

export default function PlayerDropdown() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [{ players, error, loading }] = useGetPlayers();
  console.log(players);

  const handleChange = (event) => {
    setSelectedPlayer(event.target.value);
  };
  return (
    <>
      <Dropdown value={selectedPlayer} onChange={handleChange}>
        <DropdownList disabled value=""></DropdownList>
        {loading && '...'}
        {error && <p>ohoh</p>}
        {players &&
          Object.keys(players).map((player) => (
            <DropdownList key={player} value={player}>
              {player}
            </DropdownList>
          ))}
      </Dropdown>
    </>
  );
}
