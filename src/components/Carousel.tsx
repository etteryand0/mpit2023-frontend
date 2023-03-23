import React from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const ViewPort = styled.div`
  overflow: hidden;
`;

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  min-height: 200px;
  padding-inline: 40px;
  width: 100%;
`;

interface CarouselProps {
  children: React.ReactNode;
  activeIndex: number;
  updateIndex: (newIndex: number) => void;
}

const Carousel = ({ children, activeIndex, updateIndex }: CarouselProps) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <ViewPort {...handlers}>
      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children}
      </Inner>
    </ViewPort>
  );
};

export default Carousel;
