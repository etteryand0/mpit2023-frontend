import { Spin } from 'antd';
import { useAtom, useAtomValue } from 'jotai';
import { bottomSheetOpenEventAtom, bottomSheetPageAtom } from '../atom';
import Carousel, { CarouselItem } from '@/components/Carousel';
import Nav from '../components/Nav';
import Room from './Room';
import Events from './Events';
import Gallery from './Gallery';
import { useFindUniqueRoomQuery } from '@/generated/graphql';
import Divider from '../components/Divider';

const navItems = ['О кабинете', 'Мероприятия', 'Галерея работ'];

const RoomClick = () => {
  const [bottomSheetPage, setBottomSheetPage] = useAtom(bottomSheetPageAtom);
  const bottomSheetOpenEvent = useAtomValue(bottomSheetOpenEventAtom);
  const { data, loading } = useFindUniqueRoomQuery({
    variables: { roomId: bottomSheetOpenEvent.payload },
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0 || newIndex > 2) {
      return;
    }

    setBottomSheetPage(newIndex);
  };

  console.log(error);

  return (
    <div>
      <Nav navItems={navItems} />

      <Divider />

      <Carousel activeIndex={bottomSheetPage} updateIndex={updateIndex}>
        <CarouselItem>
          {!loading && data?.findUniqueRoom ? (
            <Room
              title={data.findUniqueRoom.title}
              description={data.findUniqueRoom.description}
              image={data.findUniqueRoom.image}
            />
          ) : (
            <Spin size="large" />
          )}
        </CarouselItem>
        <CarouselItem>
          {!loading && data?.findManyEvent ? (
            <Events events={data.findManyEvent} />
          ) : (
            <Spin size="large" />
          )}
        </CarouselItem>
        <CarouselItem>
          {!loading && data?.findUniqueRoom ? (
            <Gallery gallery={data.findUniqueRoom.gallery} />
          ) : (
            <Spin size="large" />
          )}
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default RoomClick;
