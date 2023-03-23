import Typography from '@/components/Typography';
import Card from '../components/Card';

interface EventsProps {
  events: {
    id: string;
    title: string;
    image?: string | null;
    shortDescription: string;
  }[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <div style={{ width: '100%' }}>
      {events.map(({ id, title, shortDescription, image }, i) => (
        <Card
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
