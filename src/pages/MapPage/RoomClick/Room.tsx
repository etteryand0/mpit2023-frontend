import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { useSetAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import { bottomSheetOpenAtom } from '../atom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const EventImage = styled.img`
  border-radius: 12px;
  width: 100%;
  display: block;
`;

const MascotImage = styled.img`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

interface Props {
  title: string;
  description?: string | null;
  image?: string | null;
}

const Room = ({ title, image, description }: Props) => {
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  if (image && !image?.startsWith('/')) {
    image = 'https://sergin.space/static/' + image;
  }
  return (
    <div style={{ width: '100%' }}>
      <Header>
        <Typography.Title
          level={2}
          style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
        >
          {title}
        </Typography.Title>
        <img
          src="/cancel.svg"
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={() => setBottomSheetOpen(false)}
        />
      </Header>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      {image ? <EventImage src={image} /> : null}
      <MascotImage src="/mascot.svg" />
    </div>
  );
};

export default Room;
