import React from 'react';
import styled from '@emotion/styled';
import check from '../assets/check.svg';

const FooterButtonContainer = styled.div`
  width: 75px;
  height: 75px;
`;

const RoundButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: 1px ${(props) => props.theme.colors.textPrimaryHover} solid;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 8px ${(props) => props.theme.colors.textPrimaryHover};
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.textPrimaryHover};
    background: ${(props) => props.theme.colors.primaryHover};
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const CheckButton = styled(RoundButton)`
  background-image: url(${check});
  &:hover {
    background-image: url(${check});
  }
`;

const FooterButton = () => {
  return (
    <>
      <FooterButtonContainer>
        <CheckButton></CheckButton>
      </FooterButtonContainer>
    </>
  );
};

export default FooterButton;
