import {
  bottomSheetOpenAtom,
  bottomSheetOpenEventAtom,
} from '@/pages/MapPage/atom';
import { useSetAtom } from 'jotai';
import styled from 'styled-components';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import { Col, Row } from 'antd';

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

const Category = styled.div`
  background-color: #ff912c;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  padding: 12px;
  border-radius: 100vw;
  /* white-space: normal; */
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 25px;
  margin-bottom: 25px;
  /* white-space: normal; */
`;

interface CardProps {
  id: string;
  title: string;
  shortDescription: string;
  image?: string | null;
  cancelButton?: boolean;
}

const Card = ({
  id,
  shortDescription,
  title,
  image,
  cancelButton = false,
}: CardProps) => {
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  const setBottomSheetOpenEvent = useSetAtom(bottomSheetOpenEventAtom);
  if (!image?.startsWith('/')) {
    image = 'https://sergin.space/static/' + image;
  }

  const onClick = () => {
    setBottomSheetOpenEvent({
      type: 'uniquePage',
      payload: id,
    });
  };

  return (
    <div>
      <Header>
        <Typography.Title
          level={2}
          style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
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

      <CategoryList>
        <Category>Дизайн</Category>
        <Category>Разработка</Category>
        <Category>Продакт-менеджмент</Category>
        <Category>Софт скиллы</Category>
      </CategoryList>

      <Typography.Paragraph
        dangerouslySetInnerHTML={{
          __html:
            'Lorem ipsum dolor sit amet consectetur. Interdum sit ut pulvinar vulputate quis pellentesque.',
        }}
      />

      <Button onClick={onClick}>Перейти</Button>
    </div>
  );
};

export default Card;
