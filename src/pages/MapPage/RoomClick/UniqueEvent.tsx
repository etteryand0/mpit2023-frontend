import Button from '@/components/Button';
import Typography from '@/components/Typography';
import {
  useFindUniqueEventQuery,
  useRegisterForEventMutation,
} from '@/generated/graphql';
import { Spin } from 'antd';
import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { Category, CategoryList, EventImage, Header } from '../components/Card';
import Divider from '../components/Divider';
import { selectedEventAtom } from './atom';
import dayjs from '@/utils/dayjs';
import { userAtom } from '@/pages/LoginPage/atom';

type Props = {
  eventId: string;
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{children}</Typography.Paragraph>
    </section>
  );
};

const UniqueEvent = ({ eventId }: Props) => {
  const user = useAtomValue(userAtom);
  const setSelectedEventAtom = useSetAtom(selectedEventAtom);
  const { data, loading } = useFindUniqueEventQuery({
    variables: { id: eventId },
  });
  const [doRegisterForEvent] = useRegisterForEventMutation();

  const onClick = async () => {
    try {
      const { data } = await doRegisterForEvent({
        variables: { eventId, username: user!.username },
      });
      if (data?.updateOneEvent) {
        setSelectedEventAtom(null);
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };

  if (loading || !data?.findUniqueEvent) {
    return <Spin size="large" />;
  }

  const {
    categories,
    date,
    description,
    responsibles,
    shortDescription,
    title,
    image,
  } = data.findUniqueEvent;

  return (
    <div style={{ width: '100%' }}>
      <Header style={{ marginBottom: 24 }}>
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
          onClick={() => setSelectedEventAtom(null)}
        />
      </Header>
      <EventImage src={image ? image : undefined} />
      <Divider />
      <Section title="Краткая инф.">{shortDescription}</Section>
      <Divider />
      <Section title="Полная инф.">{description}</Section>
      <Divider />
      <Section title="Когда">
        <span style={{ display: 'block', marginBottom: 25 }}>
          Дата: {dayjs(date).format('DD.MM.YY')}
        </span>
        <span style={{ display: 'block' }}>
          Время: {dayjs(date).format('HH:MM')}
        </span>
      </Section>
      <Divider />
      <Section title="Ответственные лица">
        {responsibles.map(({ profile }) => (
          <span style={{ display: 'block', marginBottom: 25 }}>
            {profile?.name}{' '}
            {profile?.jobTitle ? ` - ${profile.jobTitle}` : null}
          </span>
        ))}
      </Section>
      {categories.length !== 0 ? (
        <>
          <Divider />
          <CategoryList>
            {categories.map(({ title }) => (
              <Category key={`category-${title}`}>{title}</Category>
            ))}
          </CategoryList>
        </>
      ) : null}
      <Divider />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Button onClick={onClick} type="short" style={{ marginBottom: 25 }}>
          Присоединиться
        </Button>
        <img alt="" src="/uzor.jpg" />
      </div>
    </div>
  );
};

export default UniqueEvent;
