import styled from '@emotion/styled';
import React from 'react';
import UserContext from '../contexts/UserContext';
import { useGetPlayers } from '../hooks/useGetPlayers';
import useGetUserById from '../hooks/useGetUserById';
import PropTypes from 'prop-types';
import arrow from '../assets/arrow.svg';

const Dropdown = styled.select`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 70px 0px;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: 'Montserrat', sans-serif;
  width: 90%;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${(props) => props.src}) no-repeat 100% 12px;
`;

const Option = styled.option`
  font-family: inherit;
  font-size: 0.5rem;
`;

export default function PlayerDropdown({ value, onChange }) {
  const [{ players, error, loading }] = useGetPlayers();
  const loggedInUserId = React.useContext(UserContext);
  const [{ user }] = useGetUserById(loggedInUserId);

  const handleChange = (event) => {
    const player = players.find((player) => player.name === event.target.value);
    onChange(player);
  };

  return (
    <Dropdown
      value={value ? value.name : ''}
      onChange={handleChange}
      src={arrow}
    >
      <Option hidden value="default">
        {user ? user.player.name : "What's your name?"}
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
