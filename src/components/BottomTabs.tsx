import { useMemo } from 'react';
import {
  bottomSheetOpenAtom,
  bottomSheetOpenEventAtom,
} from '@/pages/MapPage/atom';
import { themes } from '@/styles/theme';
import { useSetAtom } from 'jotai';
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
  padding-inline: 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* margin-top: auto; */
  position: absolute;
  bottom: 0;
`;

interface BottomTabsProps {
  activeTab: number;
}

const BottomTabs = ({ activeTab }: BottomTabsProps) => {
  const navigate = useNavigate();
  const { location } = useNavigation();
  const setBottomOpenSheet = useSetAtom(bottomSheetOpenAtom);
  const setBottomSheetOpenEvent = useSetAtom(bottomSheetOpenEventAtom);

  const onClick = (to: string) => {
    if ((location === undefined || location?.pathname === '/') && to === '/') {
      setBottomOpenSheet(true);
      setBottomSheetOpenEvent({
        type: 'roomClick',
        payload: 'act_zal',
      });
      // setBottomSheetOpenEvent({
      //   type: 'tabClick',
      //   payload: null,
      // });
      return;
    }

    navigate(to);
    return;
  };

  return (
    <Container>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        stroke={
          activeTab === 0 ? themes.light.primary : themes.light.textParagraph
        }
        onClick={() => onClick('/')}
        cursor="pointer"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.16675 5.00008C2.16675 3.15913 3.65913 1.66675 5.50008 1.66675H8.83341C10.6744 1.66675 12.1667 3.15913 12.1667 5.00008V8.33341C12.1667 10.1744 10.6744 11.6667 8.83341 11.6667H5.50008C3.65913 11.6667 2.16675 10.1744 2.16675 8.33341V5.00008Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8334 5.00008C18.8334 3.15913 20.3258 1.66675 22.1667 1.66675H25.5001C27.341 1.66675 28.8334 3.15913 28.8334 5.00008V8.33341C28.8334 10.1744 27.341 11.6667 25.5001 11.6667H22.1667C20.3258 11.6667 18.8334 10.1744 18.8334 8.33341V5.00008Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.16675 21.6667C2.16675 19.8258 3.65913 18.3334 5.50008 18.3334H8.83341C10.6744 18.3334 12.1667 19.8258 12.1667 21.6667V25.0001C12.1667 26.841 10.6744 28.3334 8.83341 28.3334H5.50008C3.65913 28.3334 2.16675 26.841 2.16675 25.0001V21.6667Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8334 21.6667C18.8334 19.8258 20.3258 18.3334 22.1667 18.3334H25.5001C27.341 18.3334 28.8334 19.8258 28.8334 21.6667V25.0001C28.8334 26.841 27.341 28.3334 25.5001 28.3334H22.1667C20.3258 28.3334 18.8334 26.841 18.8334 25.0001V21.6667Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        stroke={
          activeTab === 1 ? themes.light.primary : themes.light.textParagraph
        }
        onClick={() => onClick('/chat')}
        cursor="pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3333 11.6667H10.35M17 11.6667H17.0167M23.6667 11.6667H23.6833M12 21.6667H5.33333C3.49238 21.6667 2 20.1744 2 18.3334V5.00008C2 3.15913 3.49238 1.66675 5.33333 1.66675H28.6667C30.5076 1.66675 32 3.15913 32 5.00008V18.3334C32 20.1744 30.5076 21.6667 28.6667 21.6667H20.3333L12 30.0001V21.6667Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width="29"
        height="36"
        viewBox="0 0 29 36"
        fill="none"
        stroke={
          activeTab === 2 ? themes.light.primary : themes.light.textParagraph
        }
        onClick={() => onClick('/profile')}
        cursor="pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6429 9.11111C21.6429 13.0385 18.4449 16.2222 14.5 16.2222C10.5551 16.2222 7.35714 13.0385 7.35714 9.11111C7.35714 5.18375 10.5551 2 14.5 2C18.4449 2 21.6429 5.18375 21.6429 9.11111Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 21.5556C7.59644 21.5556 2 27.1271 2 34H27C27 27.1271 21.4036 21.5556 14.5 21.5556Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default BottomTabs;
