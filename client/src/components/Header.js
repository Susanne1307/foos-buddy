import React from 'react';
import styled from '@emotion/styled';
import menu from '../assets/menu.svg';
import header_logo from '../assets/header_logo.svg';
import Title from '../components/Title';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 10%;
  top: 0;
  background: ${(props) => props.theme.colors.basic};
  box-shadow: 0px 1px 1px ${(props) => props.theme.colors.shadow};
  padding: 5px 10px;
`;

const HeaderItem = styled.input`
  height: 100%;
  outline: none;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const TitleWrap = styled.div`
  font-size: 5vh;
  padding-top: 5px;
`;

export const Header = () => (
  <HeaderContainer>
    <HeaderItem type="image" src={menu}></HeaderItem>
    <TitleWrap>
      <Title />
    </TitleWrap>
    <HeaderItem type="image" src={header_logo}></HeaderItem>
  </HeaderContainer>
);

export default Header;
