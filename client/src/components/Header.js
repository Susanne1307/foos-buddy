import React, { useContext } from 'react';
import { NavigationContext } from '../NavigationContext';
import styled from '@emotion/styled';
import menu from '../assets/menu.svg';
import header_logo from '../assets/header_logo.svg';
import Title from '../components/Title';
import SideNavigation from './SideNavigation';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 65px;
  top: 0;
  background: ${(props) => props.theme.colors.basic};
  box-shadow: 0px 1px 1px ${(props) => props.theme.colors.shadow};
  padding: 5px 10px;
`;

const HeaderItem = styled.img`
  height: 80%;
  outline: none;
  cursor: pointer;
  z-index: -1;
  position: relative;
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 5vh;
`;

function Header() {
  const [showMenu, setShowMenu] = useContext(NavigationContext);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <SideNavigation showMenu={showMenu} />
      <HeaderContainer>
        <HeaderItem src={menu} onClick={toggleMenu} />
        <TitleWrap>
          <Title />
        </TitleWrap>
        <HeaderItem src={header_logo} />
      </HeaderContainer>
    </>
  );
}

export default Header;
