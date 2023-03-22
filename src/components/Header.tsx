import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Nav = styled.nav`
  position: fixed;
  background-color: #fff;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: ${({ theme }) => theme.horizontalPadding};
  z-index: 1;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  return (
    <Nav>
      <Button></Button>
      <NavItem>yopta</NavItem>
      <Button></Button>
    </Nav>
  );
};

export default Header;
