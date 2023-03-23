import Typography from '@/components/Typography';
import { Button, Form, Input } from 'antd';

const EditProfilePage = () => {
  const onFinish = (data: any) => {};

  return (
    <div>
      <Typography.Title level={3}>Редактировать профиль</Typography.Title>
      <Form onFinish={onFinish}>
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Фамилия" name="surname">
          <Input />
        </Form.Item>
        <Form.Item label="О себе" name="bio">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form>
    </div>
  );
};

export default EditProfilePage;
