import styled from '@emotion/styled';
import React from 'react';
import { useGetPlayers } from '../hooks/useGetPlayers';
import PropTypes from 'prop-types';

const Dropdown = styled.select`
  border: none;
  border-radius: 0px;
  border-bottom: 3px ${(props) => props.theme.colors.tertiary} solid;
  background: none;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: 'Montserrat', sans-serif;
  text-align-last: center;
`;

const Option = styled.option`
  font-family: inherit;
  font-size: 0.5rem;
`;

export default function PlayerDropdown({ value, onChange }) {
  const [{ players, error, loading }] = useGetPlayers();

  const handleChange = (event) => {
    const player = players.find((player) => player.name === event.target.value);
    onChange(player);
  };

  return (
    <Dropdown value={value ? value.name : ''} onChange={handleChange}>
      <Option hidden value="default">
        What&apos;s your name?
      </Option>
      {loading && '...'}
      {error && <p>ohoh</p>}
      {players &&
        players.map((player) => (
          <Option key={player.name} value={player.name}>
            {player.name}
          </Option>
        ))}
    </Dropdown>
  );
}

PlayerDropdown.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
};
