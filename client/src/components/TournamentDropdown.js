import styled from '@emotion/styled';
import React from 'react';

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

const tournaments = [
  'Leonhart World Series',
  'German Championship',
  'World Championship',
  'Cologne City Championship',
];

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
    <DropdownWrapper>
      <Dropdown value={dropdownValue} onChange={handleChange}>
        <option value="" disabled>
          Choose Tournament
        </option>
        <CreateTournaments></CreateTournaments>
      </Dropdown>
    </DropdownWrapper>
  );
}
