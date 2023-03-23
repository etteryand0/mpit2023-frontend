import { useState } from 'react';
import Typography from '@/components/Typography';
import { CardWithButton } from '../components/Card';
import UniqueEvent from './UniqueEvent';
import { selectedEventAtom } from './atom';
import { useAtomValue } from 'jotai';

interface EventsProps {
  events: {
    id: string;
    title: string;
    image?: string | null;
    shortDescription: string;
  }[];
}

const Events = ({ events }: EventsProps) => {
  const selectedEvent = useAtomValue(selectedEventAtom);

  if (selectedEvent) {
    return <UniqueEvent eventId={selectedEvent} />;
  }

  return (
    <div style={{ width: '100%' }}>
      {events.map(({ id, title, shortDescription, image }, i) => (
        <CardWithButton
          id={id}
          key={id + title}
          title={title}
          shortDescription={shortDescription}
          cancelButton={i === 0}
          image={image}
        />
      ))}
      {events.length === 0 ? (
        <Typography.Title level={3}>Нет мероприятий</Typography.Title>
      ) : null}
    </div>
  );
};

export default Events;
