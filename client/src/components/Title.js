import React from 'react';
import styled from '@emotion/styled';

export const Foos = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export const Buddy = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const Title = () => (
  <>
    <Foos>Foos</Foos>
    <Buddy>Buddy</Buddy>
  </>
);

export default Title;
