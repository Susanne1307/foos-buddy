import styled from '@emotion/styled';
import React from 'react';
import FullContainer from './FullContainer';

const SideNav = styled.div`
  filter: drop-shadow(16px 19px 28px);
  position: absolute;
  background: #3f4859;
  opacity: 0.9;
  color: #fafafa;
  padding: 1rem;
  width: calc(60% - 2rem);
  max-width: 400px;
  height: 100%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  bottom: 0;
  top: 0;

  /* animation will be added later */
  /* display: none; */
  /* transform: scaleX(0);
  transform-origin: right; */

  /* & show-menu {
    display: block;
    animation: slide-menu 1s ease-in forwards;
  }
  @keyframes slide-menu {
    from {
      transform: scaleX(2);
    }
    to {
      transform: scaleY(1);
    }
  }*/
`;

export const ProfilePictureContainer = styled.div`
  align-items: center;
  width: 25%;
  height: 30%;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
  padding-inline-start: 20px;
  height: 80%;
  font-family: 'Montserrat', sans-serif;
`;

export const MenuListItems = styled.li`
  padding: 20px;
  border: none;
  border-bottom: 3px #5ce0b9 solid;
  width: 50%;
  a {
    text-decoration: none;
    color: white;
  }
`;

const SideNavigation = () => {
  return (
    <FullContainer>
      <SideNav>
        <ProfilePictureContainer></ProfilePictureContainer>
        <MenuList>
          <MenuListItems>
            <a href="/">Overview</a>
          </MenuListItems>
          <MenuListItems>
            <a href="/">Add search</a>
          </MenuListItems>
          <MenuListItems>
            <a href="/">Profile</a>
          </MenuListItems>
          <MenuListItems>
            <a href="/">Logout</a>
          </MenuListItems>
        </MenuList>
      </SideNav>
    </FullContainer>
  );
};

export default SideNavigation;
