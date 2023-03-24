import Typography from '@/components/Typography';
import { useLoginMutation } from '@/generated/graphql';
import { Button, Form, Input } from 'antd';
import { useAtom } from 'jotai';
import { Link, useNavigate } from 'react-router-dom';
import { userAtom } from './atom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

const Login = () => {
  const [user, setUser] = useAtom(userAtom);
  const [doLogin] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish = async ({ username, password }: any) => {
    const { data } = await doLogin({
      variables: {
        data: {
          username,
          password,
        },
      },
    });

    if (data?.login?.token) {
      localStorage.setItem('token', data.login.token);
      setUser({ username, id: data.login.user.id, role: data.login.user.role });
      navigate('/');
    }
  };

  return (
    <Container>
      <Logo src="/logo.png" />
      <div>
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
            textTransform: 'none',
            fontWeight: 600,
            margin: 0,
          }}
        >
          Войти
        </Typography.Title>
        <p style={{ fontSize: 17, textAlign: 'center', marginTop: 0 }}>
          Добро пожаловать! <br />
          Пожалуйста, введите свои данные.
        </p>
        <Form onFinish={onFinish}>
          <Form.Item
            label="Имя пользователя"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
          <Link to="/signup" style={{ display: 'block', marginTop: 10 }}>
            Нет аккаунта?
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
