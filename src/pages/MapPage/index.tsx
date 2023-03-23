import { useAtom } from 'jotai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled from 'styled-components';
import { bottomSheetOpenAtom } from './atom';
import BottomTabs from '@/components/BottomTabs';
import RoomClick from './RoomClick';

const Container = styled.div`
  background-color: #9ac8ff;
  position: relative;
  height: 100svh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  position: 'absolute';
  top: 0;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

const MapPage = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useAtom(bottomSheetOpenAtom);

  return (
    <Container style={{ height: '100svh' }}>
      <Logo>
        <img alt="" src="/logo.png" />
      </Logo>
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
