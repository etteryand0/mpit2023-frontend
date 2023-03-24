import Typography from '@/components/Typography';
import { useFindUniqueShortLinkQuery, UserRole } from '@/generated/graphql';
import { Space, Spin } from 'antd';
import { useAtomValue } from 'jotai';
import React from 'react';
import { useParams } from 'react-router-dom';
import { userAtom } from '../LoginPage/atom';

const ShortLink = () => {
  const { path } = useParams();
  const user = useAtomValue(userAtom);
  const { data, loading } = useFindUniqueShortLinkQuery({
    variables: { path: path as string },
  });

  if (loading || !data?.findUniqueShortLink) {
    return <Spin size={'large'} />;
  }

  if (!user) {
    return <Typography.Title level={2}>Вы не авторизованы</Typography.Title>;
  }

  if (user.role !== UserRole.Dean && user.role !== UserRole.Staff) {
    return (
      <Typography.Title level={2}>
        У вас нет прав на этот запрос
      </Typography.Title>
    );
  }

  return (
    <Space>
      <Typography.Title level={2}>
        Мероприятие: {data.findUniqueShortLink.event.title}
      </Typography.Title>
      Ученик {data.findUniqueShortLink.user.profile?.name}{' '}
      {data.findUniqueShortLink.user.profile?.surname} (
      {data.findUniqueShortLink.user.username}) отмечен.
    </Space>
  );
};

export default ShortLink;
