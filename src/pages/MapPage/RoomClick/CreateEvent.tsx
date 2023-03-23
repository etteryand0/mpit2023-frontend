import Typography from '@/components/Typography';
import {
  useIssueEventMutation,
  usePrepareIssueEventQuery,
} from '@/generated/graphql';
import { Button, Form, Input, Select, Spin } from 'antd';
import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { bottomSheetOpenAtom, bottomSheetOpenEventAtom } from '../atom';
import { Header } from '../components/Card';
import Divider from '../components/Divider';
import dayjs from '@/utils/dayjs';

type Props = {
  toggle: () => void;
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
      <Typography.Title
        level={2}
        style={{ fontWeight: 600, textTransform: 'none' }}
      >
        {title}
      </Typography.Title>
      {children}
    </section>
  );
};

const CreateEvent = ({ toggle }: Props) => {
  const { data, loading } = usePrepareIssueEventQuery();
  const [doIssueEvent] = useIssueEventMutation();
  const bottomSheetOpenEvent = useAtomValue(bottomSheetOpenEventAtom);
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  const [categories, setCategories] = React.useState<number[]>([]);
  const [responsibles, setResponsibles] = React.useState<string[]>([]);
  const [date, setDate] = React.useState(new Date());
  // console.log(categories, date);

  const onFinish = async ({
    title,
    shortDescription,
    description,
    date,
    time,
  }: any) => {
    const datetime = dayjs(`${date}.2023 ${time}`, 'DD.MM.YYYY hh:mm');
    const connectCategories: { id: number }[] = [];
    categories.forEach(id => {
      connectCategories.push({ id });
    });
    const connectResponsibles: { id: string }[] = [];
    responsibles.forEach(id => {
      connectResponsibles.push({ id });
    });

    try {
      const { data } = await doIssueEvent({
        variables: {
          data: {
            date: datetime.toISOString(),
            description,
            shortDescription,
            title,
            room: { connect: { id: bottomSheetOpenEvent.payload } },
            categories: { connect: connectCategories },
            responsibles: { connect: connectResponsibles },
            image: '/actzal.jpg',
            approved: true,
          },
        },
      });

      if (data?.issueEvent) {
        setBottomSheetOpen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading || !data?.findManyCategory || !data.findManyUser) {
    return <Spin size="large" />;
  }

  return (
    <div style={{ width: '100%' }}>
      <Header>
        <Typography.Title
          level={2}
          style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
        >
          Создание мероприятия
        </Typography.Title>
        <img
          src="/cancel.svg"
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={toggle}
        />
      </Header>
      <Form onFinish={onFinish}>
        <Section title="Название">
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input placeholder="Введите" size="large" />
          </Form.Item>
        </Section>
        <Divider />
        <Section title="Краткая инф.">
          <Form.Item
            name="shortDescription"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input placeholder="Введите" size="large" />
          </Form.Item>
        </Section>
        <Section title="Полная инф.">
          <Form.Item
            name="description"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input.TextArea
              autoSize={{ minRows: 3, maxRows: 8 }}
              placeholder="Введите"
              size="large"
            />
          </Form.Item>
        </Section>
        <Section title="Ответственные лица">
          <Form.Item>
            <Select
              mode="multiple"
              allowClear
              placeholder="Выберите категории"
              onChange={v => setResponsibles(v)}
              value={responsibles}
              options={data.findManyUser.map(user => {
                const label = `${user.profile?.name} ${user.profile?.surname}`;

                return {
                  label: user.profile?.jobTitle
                    ? `${label} - ${user.profile.jobTitle}`
                    : label,
                  value: user.id,
                };
              })}
            />
          </Form.Item>
        </Section>
        <Section title="Дата и время">
          <Form.Item
            name="date"
            rules={[
              { required: true, message: 'Обязательное поле' },
              {
                pattern: /^[0-3][0-9]\.[0-1][0-9]$/,
                message: 'Введите в формате ДД.ММ',
              },
            ]}
          >
            <Input placeholder="Дата" size="large" />
          </Form.Item>
          <Form.Item
            name="time"
            rules={[
              { required: true, message: 'Обязательное поле' },
              {
                pattern: /^[0-2][0-3]:[0-5][0-9]$/,
                message: 'Введите в формате ЧЧ:ММ',
              },
            ]}
          >
            <Input placeholder="Время" size="large" />
          </Form.Item>
        </Section>
        <Section title="Добавить категории">
          <Form.Item>
            <Select
              mode="multiple"
              allowClear
              placeholder="Выберите категории"
              onChange={v => setCategories(v)}
              value={categories}
              options={data.findManyCategory.map(({ id, title }) => ({
                label: title,
                value: id,
              }))}
            />
          </Form.Item>
        </Section>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              borderRadius: '100vw',
              // padding: 12,
              fontSize: 20,
              fontWeight: 500,
              marginBottom: 25,
            }}
          >
            Заявка на новое мероприятие
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateEvent;
