import Typography from '@/components/Typography';
import { useSetAtom } from 'jotai';
import React from 'react';
import { bottomSheetOpenAtom } from '../atom';
import { Category, CategoryList, EventImage, Header } from '../components/Card';
import Divider from '../components/Divider';
import dayjs from '@/utils/dayjs';
import {
  useFindMyRegisteredEventsQuery,
  useGenerateShortLinkMutation,
  useUnsignFromEventMutation,
} from '@/generated/graphql';
import { Spin, Button } from 'antd';
// import Button from '@/components/Button';
import QR from './QR';

type CardProps = {
  id: string;
  title: string;
  categories: { title: string }[];
  shortDescription: string;
  image?: string | null;
  date: any;
  unsign: (eventId: string) => void;
  setQRValue: (value: string) => void;
};

const Card = ({
  categories,
  date,
  shortDescription,
  title,
  unsign,
  id,
  image,
  setQRValue,
}: CardProps) => {
  const [doGenerate] = useGenerateShortLinkMutation();

  const generateQR = async () => {
    try {
      const { data } = await doGenerate({ variables: { eventId: id } });

      if (data?.generateShortLink) {
        const link = 'https://sergin.space/p/' + data.generateShortLink;
        setQRValue(link);
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <div>
      <Typography.Title
        level={2}
        style={{ fontWeight: 600, textTransform: 'none' }}
      >
        {title}
      </Typography.Title>
      <EventImage src={image ? image : undefined} />
      <CategoryList>
        {categories.map(({ title }) => (
          <Category>{title}</Category>
        ))}
      </CategoryList>
      <Typography.Paragraph>{shortDescription}</Typography.Paragraph>
      <Typography.Title
        level={2}
        style={{ fontWeight: 600, textTransform: 'none' }}
      >
        Когда
      </Typography.Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 25 }}>
        <div style={{ fontSize: 20 }}>
          <span style={{ color: '#0000007A' }}>Дата: </span>
          {dayjs(date).format('DD.MM.YY')}
        </div>
        <div style={{ fontSize: 20 }}>
          <span style={{ color: '#0000007A' }}>Время: </span>{' '}
          {dayjs(date).format('HH:MM')}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 25,
          marginTop: 25,
        }}
      >
        <Button
          style={{
            borderRadius: '100vw',
            minHeight: 45,
            backgroundColor: '#DB4B41',
            color: '#fff',
          }}
          size="small"
          onClick={() => unsign(id)}
        >
          Отменить
        </Button>
        <Button
          style={{ borderRadius: '100vw', minHeight: 45 }}
          size="small"
          type="primary"
          onClick={generateQR}
        >
          QR - код
        </Button>
      </div>
      <Divider />
    </div>
  );
};

const TabClick = () => {
  const [QRValue, setQRValue] = React.useState<string | null>(null);
  const { data, loading, refetch } = useFindMyRegisteredEventsQuery();
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  const [doUnsign] = useUnsignFromEventMutation();

  const unsign = async (eventId: string) => {
    doUnsign({ variables: { eventId } });
    refetch();
  };

  if (QRValue !== null) {
    return <QR value={QRValue} toggle={() => setQRValue(null)} />;
  }

  if (loading || !data?.findMyRegisteredEvents) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <div style={{ width: '100%', paddingInline: 40 }}>
        <Header>
          <Typography.Title
            level={2}
            style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
          >
            Мои мероприятия
          </Typography.Title>
          <img
            src="/cancel.svg"
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => setBottomSheetOpen(false)}
          />
        </Header>
        <Divider />
        {data.findMyRegisteredEvents.map(event => (
          <Card
            key={`tabclick-event-${event.title}`}
            {...event}
            unsign={unsign}
            setQRValue={setQRValue}
          />
        ))}
      </div>
    </div>
  );
};

export default TabClick;
