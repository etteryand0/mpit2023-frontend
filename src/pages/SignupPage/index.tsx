import Typography from '@/components/Typography';
import { useSignupMutation } from '@/generated/graphql';
import { Button, Form, Input } from 'antd';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../LoginPage/atom';

const SignUp = () => {
  const [user, setUser] = useAtom(userAtom);
  const [doSignup] = useSignupMutation();
  const navigate = useNavigate();

  const onFinish = async ({ username, password }: any) => {
    const { data } = await doSignup({
      variables: {
        data: {
          username,
          password,
        },
      },
    });

    if (data?.signup?.token) {
      localStorage.setItem('token', data.signup.token);
      setUser({ username });
      navigate('/');
    }
  };

  return (
    <div>
      <Typography.Title level={3}>Зарегистрироваться</Typography.Title>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
