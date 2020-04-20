import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from '../NavigationContext';
import styled from '@emotion/styled';
import ProfileImage from '../components/ProfileImage';
import cross from '../assets/cross.svg';

const SideNav = styled.div`
  box-shadow: 16px 19px 28px ${(props) => props.theme.colors.navShadow};
  position: fixed;
  z-index: 2;
  background: ${(props) => props.theme.colors.secondary};
  opacity: 0.97;
  bottom: 0;
  left: 0;
  top: 0;
  padding: 1rem;
  width: 70vw;
  max-width: 400px;
  height: 100vh;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: ease-in-out;
  display: ${({ showMenu }) => (!showMenu ? 'none' : 'block')};
`;

const CloseMenu = styled.img`
  height: 5vh;
  padding: 5px;
  opacity: 0.8;
  outline: none;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

export const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30vh;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 1.5rem;
  padding-inline-start: 5%;
  height: 55vh;
  width: 80%;
  margin-top: 3vh;
`;

export const MenuListItems = styled.li`
  border: none;
  border-bottom: 3px ${(props) => props.theme.colors.quaternary} solid;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const SideNavigation = () => {
  const [showMenu, setShowMenu] = useContext(NavigationContext);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <SideNav showMenu={showMenu}>
      <CloseMenu src={cross} onClick={toggleMenu} />
      <ProfilePictureContainer>
        <ProfileImage />
      </ProfilePictureContainer>
      <MenuList>
        <MenuListItems>
          <a href="/overview">Overview</a>
        </MenuListItems>
        <MenuListItems>
          <a href="/search">Add search</a>
        </MenuListItems>
        <MenuListItems>
          <a href="/profile">Profile</a>
        </MenuListItems>
        <MenuListItems>
          <a href="/logout">Logout</a>
        </MenuListItems>
      </MenuList>
    </SideNav>
  );
};

export default SideNavigation;

SideNavigation.propTypes = {
  showMenu: PropTypes.bool,
  onClick: PropTypes.func,
  toggleMenu: PropTypes.func,
};
