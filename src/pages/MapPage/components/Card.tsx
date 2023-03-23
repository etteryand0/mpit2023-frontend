import { bottomSheetOpenAtom } from '@/pages/MapPage/atom';
import { useSetAtom } from 'jotai';
import styled from 'styled-components';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Col, Row } from 'antd';
import { selectedEventAtom } from '../RoomClick/atom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const EventImage = styled.img`
  border-radius: 12px;
  width: 100%;
  display: block;
`;

export const Category = styled.div`
  background-color: #ff912c;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  padding: 12px;
  border-radius: 100vw;
  /* white-space: normal; */
`;

export const CategoryList = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 25px;
  margin-bottom: 25px;
  /* white-space: normal; */
`;

interface CardProps {
  title: string;
  shortDescription: string;
  image?: string | null;
  cancelButton?: boolean;
}

type CardWithButtonProps = { id: string } & CardProps;

export const CardWithButton = (props: CardWithButtonProps) => {
  const setSelectedEvent = useSetAtom(selectedEventAtom);
  const onClick = () => {
    setSelectedEvent(props.id);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Card {...props} />
      <CategoryList>
        <Category>Дизайн</Category>
        <Category>Разработка</Category>
        <Category>Продакт-менеджмент</Category>
        <Category>Софт скиллы</Category>
      </CategoryList>

      <Typography.Paragraph>Lorem ipsum dolor sit amet</Typography.Paragraph>

      <Button onClick={onClick}>Перейти</Button>
    </div>
  );
};

export const Card = ({
  shortDescription,
  title,
  image,
  cancelButton = false,
}: CardProps) => {
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  if (!image?.startsWith('/')) {
    image = 'https://sergin.space/static/' + image;
  }

  return (
    <div>
      <Header>
        <Typography.Title
          level={2}
          style={{
            margin: 0,
            fontWeight: 600,
            textTransform: 'none',
            whiteSpace: 'normal',
          }}
        >
          {title}
        </Typography.Title>
        {cancelButton ? (
          <img
            src="/cancel.svg"
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => setBottomSheetOpen(false)}
          />
        ) : null}
      </Header>
      <Typography.Paragraph>{shortDescription}</Typography.Paragraph>
      <EventImage src={image} />
    </div>
  );
};
