import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import useGetTournaments from '../hooks/useGetTournaments';
import arrow from '../assets/arrow.svg';

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1rem;
  background: ${(props) => props.theme.colors.textPrimary};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 12px 0px;
  overflow: scroll;
`;

const Dropdown = styled.select`
  font-family: 'Montserrat', sans-serif;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
  width: 330px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${(props) => props.src}) no-repeat 98% 8px;
`;

export default function TournamentDropdown({ value, onChange }) {
  const [{ tournaments, error, loading }] = useGetTournaments();

  const handleChange = (event) => {
    const tournament = tournaments.find(
      (tournament) => tournament === event.target.value
    );
    onChange(tournament);
  };

  return (
    <>
      <DropdownWrapper>
        <Dropdown
          value={value ? value : ''}
          onChange={handleChange}
          src={arrow}
        >
          <option hidden value="default">
            Choose tournament
          </option>
          {loading && '...'}
          {error && <p>ohoh</p>}
          {tournaments &&
            tournaments.map((tournament) => (
              <option key={tournament} value={tournament}>
                {tournament}
              </option>
            ))}
        </Dropdown>
      </DropdownWrapper>
    </>
  );
}

TournamentDropdown.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
};
