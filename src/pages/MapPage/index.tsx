import { useAtom } from 'jotai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled from 'styled-components';
import { bottomSheetOpenAtom } from './atom';
import BottomTabs from '@/components/BottomTabs';
import RoomClick from './RoomClick';
import Map from './Map';

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
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
      >
        <RoomClick />
      </BottomSheet>
    </Container>
  );
};

export default MapPage;
