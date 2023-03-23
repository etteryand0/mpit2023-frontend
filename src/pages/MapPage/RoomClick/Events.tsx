import React, { useState } from 'react';
import Typography from '@/components/Typography';
import { CardWithButton } from '../components/Card';
import UniqueEvent from './UniqueEvent';
import { selectedEventAtom } from './atom';
import { useAtomValue } from 'jotai';
import Divider from '../components/Divider';

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
        <React.Fragment key={id + title}>
          <CardWithButton
            id={id}
            title={title}
            shortDescription={shortDescription}
            cancelButton={i === 0}
            image={image}
          />
          <Divider />
        </React.Fragment>
      ))}
      {events.length === 0 ? (
        <Typography.Title level={3}>Нет мероприятий</Typography.Title>
      ) : null}
    </div>
  );
};

export default Events;
