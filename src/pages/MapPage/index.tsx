import { useAtom, useAtomValue } from 'jotai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled from 'styled-components';
import { bottomSheetOpenAtom, bottomSheetOpenEventAtom } from './atom';
import BottomTabs from '@/components/BottomTabs';
import RoomClick from './RoomClick';
import Map from './Map';
import TabClick from './TabClick';

const Container = styled.div`
  background-color: #d8d8d8;
  position: relative;
  height: 100svh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('/bg.jpg');
  background-repeat: repeat;
`;

const Logo = styled.img`
  position: 'absolute';
  top: 15px;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

const Type = () => {
  const bottomSheetOpenEvent = useAtomValue(bottomSheetOpenEventAtom);

  switch (bottomSheetOpenEvent.type) {
    case 'tabClick':
      return <TabClick />;
    case 'roomClick':
      return <RoomClick />;
  }
};

const MapPage = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useAtom(bottomSheetOpenAtom);

  return (
    <Container style={{ height: '100svh', position: 'relative' }}>
      <Logo src="/logo.png" />
      <Map />
      <BottomTabs activeTab={0} />
      <BottomSheet
        open={bottomSheetOpen}
        onDismiss={() => setBottomSheetOpen(false)}
        skipInitialTransition
        expandOnContentDrag
        blocking={false}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
      >
        <Type />
      </BottomSheet>
    </Container>
  );
};

export default MapPage;
