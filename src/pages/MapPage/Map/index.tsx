import React from 'react';
import FloorOne from '../assets/FloorOne';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Map = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <TransformWrapper
        centerZoomedOut
        alignmentAnimation={{ disabled: true }}
        limitToBounds={false}
        initialPositionX={100}
      >
        <TransformComponent>
          <FloorOne />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
