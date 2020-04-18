import React from 'react';
import styled from '@emotion/styled';

const SelectionChip = styled.button`
  font-size: 0.9rem;
  text-align: center;
  background: none;
  color: ${(props) => props.theme.colors.textPrimary};
  border: 3px ${(props) => props.theme.colors.primary} solid;
  border-radius: 30px;
  outline: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:active {
    transform: translateY(0.5px);
    background: ${(props) => props.theme.colors.primary};
  }
  ${(props) =>
    props.clicked
      ? `
  background: ${props.theme.colors.primary}
  `
      : ''}
  &:target {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export default function Selection(props) {
  return (
    <>
      <SelectionChip {...props}></SelectionChip>
    </>
  );
}
