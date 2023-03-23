import React from 'react';
import FloorOne from '../assets/FloorOne';
import FloorTwo from '../assets/FloorTwo';
// @ts-ignore
import { MapInteractionCSS } from 'react-map-interaction';
import styled from 'styled-components';

const LeftControl = styled.div`
  position: absolute;
  top: ${() => window.innerHeight / 2 - 100}px;
  left: 10px;
  z-index: 2;
`;

const RightControl = styled.div`
  position: absolute;
  top: ${() => window.innerHeight / 2 - 100}px;
  right: 10px;
  z-index: 2;
`;

const ClickableIcon = styled.img`
  cursor: pointer;
  display: block;
  margin-bottom: 12px;
`;

const Controls = ({ floor, setFloor, setScale }: any) => {
  return (
    <>
      <LeftControl>
        <svg
          width={50}
          viewBox="0 0 64 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity={1}>
            <rect width={64} height={138} rx={32} fill="#F8F8F8" />
            <g style={{ cursor: 'pointer' }} onClick={() => setFloor(2)}>
              <rect width={64} height={69} fill="transparent" />
              <path
                d="M27.32 52h8.544v-1.76H31l3.184-3.12a5.206 5.206 0 0 0 1.104-1.456c.288-.544.432-1.11.432-1.696 0-.373-.08-.757-.24-1.152a3.175 3.175 0 0 0-.704-1.088 3.409 3.409 0 0 0-1.184-.8c-.48-.213-1.045-.32-1.696-.32-.853 0-1.579.181-2.176.544a3.453 3.453 0 0 0-1.344 1.472c-.299.619-.448 1.328-.448 2.128H29.8c0-.49.08-.923.24-1.296.17-.373.41-.656.72-.848.31-.203.677-.304 1.104-.304.31 0 .581.053.816.16.235.096.432.23.592.4.17.17.293.363.368.576.085.203.128.41.128.624 0 .299-.048.581-.144.848-.096.267-.24.533-.432.8a8.822 8.822 0 0 1-.688.832L27.32 52Z"
                fill={floor === 2 ? '#111827' : '#475569'}
                opacity={floor === 2 ? 1 : 0.5}
              />
            </g>
            <g style={{ cursor: 'pointer' }} onClick={() => setFloor(1)}>
              <rect width={64} height={69} y={69} fill="transparent" />
              <path
                d="m29.2 88.424 2.592-.72V97h1.872V85.624L29.2 86.632v1.792Z"
                fill={floor === 1 ? '#111827' : '#475569'}
                opacity={floor === 1 ? 1 : 0.5}
              />
            </g>
            <path d="M12 69h40" stroke="#000" strokeOpacity={0.25} />
            <rect
              x={2}
              y={2}
              width={60}
              height={134}
              rx={30}
              stroke="#000"
              strokeOpacity={0.15}
              strokeWidth={4}
            />
          </g>
        </svg>
      </LeftControl>
      <RightControl>
        <ClickableIcon
          onClick={() =>
            setScale((s: any) => {
              if (s + 0.25 > 1.5) {
                return 1.5;
              }
              return s + 0.25;
            })
          }
          src="/plus.svg"
        />
        <ClickableIcon
          onClick={() =>
            setScale((s: any) => {
              if (s - 0.25 < 0.5) {
                return 0.5;
              }
              return s - 0.25;
            })
          }
          src="/minus.svg"
        />
      </RightControl>
    </>
  );
};

const Map = () => {
  const [floor, setFloor] = React.useState(1);
  const s = (window.innerWidth - 20) / 1135;
  const [scale, setScale] = React.useState(s < 0.5 ? 0.5 : s);
  const [translation, setTranslation] = React.useState({ x: 0, y: 0 });
  console.log(scale, translation);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Controls floor={floor} setFloor={setFloor} setScale={setScale} />
      <MapInteractionCSS
        defaultTranslation={{ x: 100, y: 0 }}
        value={{ scale, translation }}
        maxScale={1.5}
        minScale={0.5}
        onChange={({ scale, translation }: any) => {
          setScale(scale);
          setTranslation(translation);
        }}
        // translationBounds={{
        //   xMax: 100,
        //   xMin: -100,
        //   yMax: 32,
        //   yMin: -32,
        // }}
      >
        {floor === 1 ? <FloorOne /> : <FloorTwo />}
      </MapInteractionCSS>

      {/* <TransformWrapper
        centerZoomedOut
        alignmentAnimation={{ disabled: true }}
        limitToBounds={false}
        initialPositionX={100}
      >
        <TransformComponent>
          {floor === 1 ? <FloorOne /> : <FloorTwo />}
        </TransformComponent>
      </TransformWrapper> */}
    </div>
  );
};

export default Map;
