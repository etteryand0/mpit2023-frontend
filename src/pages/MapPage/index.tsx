import { Col, Divider, Row } from 'antd';
import { useAtom } from 'jotai';
import { BottomSheet } from 'react-spring-bottom-sheet';
import styled from 'styled-components';
import { bottomSheetOpenAtom, bottomSheetPageAtom } from './atom';
import Carousel, { CarouselItem } from '@/components/Carousel';
import BottomTabs from '@/components/BottomTabs';

const Container = styled.div`
  background-color: #9ac8ff;
  position: relative;
  height: 100svh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: center;
  margin-top: 5px;
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

const NavItem = styled.span<{ sheetId: number; selected: number }>`
  color: ${({ theme, sheetId, selected }) =>
    sheetId === selected ? theme.text : theme.textParagraph};

  border-bottom: 1px solid
    ${({ theme, sheetId, selected }) =>
      sheetId === selected ? theme.primary : 'transparent'};

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const navItems = ['О кабинете', 'Мероприятия', 'Галерея работ'];

const MapPage = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useAtom(bottomSheetOpenAtom);
  const [bottomSheetPage, setBottomSheetPage] = useAtom(bottomSheetPageAtom);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0 || newIndex > 2) {
      return;
    }

    setBottomSheetPage(newIndex);
  };

  return (
    <Container style={{ height: '100svh' }}>
      <Logo>
        <img alt="" src="/logo.png" />
      </Logo>
      <BottomTabs activeTab={0} />
      <BottomSheet
        open={bottomSheetOpen}
        onDismiss={() => setBottomSheetOpen(false)}
        blocking={false}
        skipInitialTransition
        expandOnContentDrag
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
      >
        <Nav>
          {navItems.map((title, i) => (
            <NavItem
              key={`NavItem-${title}`}
              selected={bottomSheetPage}
              sheetId={i}
              onClick={() => setBottomSheetPage(i)}
            >
              {title}
            </NavItem>
          ))}
        </Nav>

        <Row justify="center">
          <Col span="22">
            <Divider style={{ paddingInline: 15 }} />
          </Col>
        </Row>

        <Carousel activeIndex={bottomSheetPage} updateIndex={updateIndex}>
          <CarouselItem>hello</CarouselItem>
          <CarouselItem>world</CarouselItem>
          <CarouselItem>yopta</CarouselItem>
        </Carousel>
      </BottomSheet>
    </Container>
  );
};

export default MapPage;
