import { bottomSheetOpenAtom } from '@/pages/MapPage/atom';
import { useSetAtom } from 'jotai';
import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-inline: 50px;
  margin-top: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Tab = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #a4a4a4;
`;

const BottomTabs = () => {
  const navigate = useNavigate();
  const { location } = useNavigation();
  const setBottomOpenSheet = useSetAtom(bottomSheetOpenAtom);

  const onClick = (to: string) => {
    if (location === undefined || (location?.pathname === '/' && to === '/')) {
      setBottomOpenSheet(true);
      return;
    }

    navigate(to);
    return;
  };

  return (
    <Container>
      <Tab onClick={() => onClick('/')}></Tab>
      <Tab onClick={() => onClick('/chat')}></Tab>
      <Tab onClick={() => onClick('/profile')}></Tab>
    </Container>
  );
};

export default BottomTabs;
