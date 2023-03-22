import React from 'react';
import Paper from './Paper';
import Typography from './Typography';

const Card = () => {
  return (
    <Paper>
      <div></div>
      <div>
        <Typography.Title level={3}>Подзаголовок</Typography.Title>
        <Typography.Paragraph>
          Lorem ipsum dolor sit amet consectetur. Interdum sit ut pulvinar
          vulputate quis pellentesque.
        </Typography.Paragraph>
      </div>
    </Paper>
  );
};

export default Card;
