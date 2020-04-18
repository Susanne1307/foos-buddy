import styled from '@emotion/styled';
import React from 'react';

const Dropdown = styled.select`
  font-size: 1rem;
  background: ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  height: 60px;
  padding: 5px;
`;

const tournaments = ['Leonhart World Series', 'German Championship'];

const CreateTournaments = () => {
  return tournaments.map((tournaments) => (
    <option key={tournaments}>{tournaments}</option>
  ));
};

export default function TournamentDropdown() {
  const [dropdownValue, setdropdownValue] = React.useState('');

  const handleChange = (event) => {
    setdropdownValue(event.target.value);
  };

  return (
    <Dropdown value={dropdownValue} onChange={handleChange}>
      <option value="" defaultValue disabled>
        Choose Tournament
      </option>
      <CreateTournaments></CreateTournaments>
    </Dropdown>
  );
}
