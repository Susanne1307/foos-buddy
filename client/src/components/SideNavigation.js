import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavigationContext } from '../NavigationContext';
import UserContext from '../contexts/UserContext';
import styled from '@emotion/styled';
import ProfileImage from '../components/ProfileImage';
import cross from '../assets/cross.svg';
import search from '../assets/icon_search.png';
import overview from '../assets/icon_overview.png';
import profile from '../assets/icon_profile.png';
import logout from '../assets/icon_logout.png';
import example from '../assets/profile_example.jpg';
import { menuAnimation, menuItemAnimation } from '../animations/slideIn';
import { getUser } from '../api/users';

const SideNav = styled.div`
  box-shadow: 16px 19px 28px ${(props) => props.theme.colors.navShadow};
  position: fixed;
  z-index: 2;
  background: ${(props) => props.theme.colors.background};
  opacity: 0.97;
  bottom: 0;
  left: 0;
  top: 0;
  padding: 1rem;
  width: 85%;
  max-width: 350px;
  height: 100vh;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: ${({ showMenu }) => (!showMenu ? 'none' : 'block')};
  animation: ${menuAnimation} 0.5s ease-in-out forwards;
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
  font-size: 1.6rem;
  padding-inline-start: 10%;
  height: 55vh;
  width: 100%;
  margin-top: 3vh;
  -webkit-tap-highlight-color: transparent;
`;

export const MenuListItems = styled.li`
  cursor: pointer;
  opacity: 0;
  :nth-of-type(1) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.3s;
  }
  :nth-of-type(2) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.4s;
  }
  :nth-of-type(3) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.5s;
  }
  :nth-of-type(4) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.6s;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

const MenuLink = styled.a`
  margin: 0px;
  padding-left: 4.5rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
`;

const SideNavigation = () => {
  const [showMenu, setShowMenu] = useContext(NavigationContext);
  const [user, setUser] = useState();
  const loggedInUserId = useContext(UserContext);
  const history = useHistory();

  async function toggleMenu() {
    try {
      const user = await getUser(loggedInUserId);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
    setShowMenu(!showMenu);
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUserToken');
    setTimeout(function () {
      history.push(`/logout`);
    }, 500);
  };

  return (
    <SideNav showMenu={showMenu}>
      <CloseMenu src={cross} onClick={toggleMenu} />
      <ProfilePictureContainer>
        <ProfileImage src={user ? user.player.img : example} />
      </ProfilePictureContainer>
      <MenuList>
        <MenuListItems>
          <MenuLink src={overview} href="/searchlist">
            Search list
          </MenuLink>
        </MenuListItems>
        <MenuListItems>
          <MenuLink src={search} href="/search">
            Create search
          </MenuLink>
        </MenuListItems>
        <MenuListItems>
          <MenuLink src={profile} href="/profile">
            Profile
          </MenuLink>
        </MenuListItems>
        <MenuListItems>
          <MenuLink src={logout} onClick={handleLogout}>
            Logout
          </MenuLink>
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
