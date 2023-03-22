import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoginMutation } from '@/generated/graphql';
import styled from 'styled-components';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { Col, Row, Button as ANTButton } from 'antd';
import Paper from '@/components/Paper';

const Section = styled.section`
  min-height: 100svh;
  min-height: 100vh;
  padding-inline: ${({ theme }) => theme.horizontalPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  /* border: 1px solid #000; */
`;

function HomePage() {
  const [doLogin] = useLoginMutation();

  const onLogin = async () => {
    const { data } = await doLogin({
      variables: {
        data: {
          email: 'sergey3789pe@gmail.com',
          password: '12345678',
        },
      },
    });

    if (data?.login?.token) {
      localStorage.setItem('token', data.login.token);
    }
  };

  return (
    <div>
      <Header />
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Section>
        <div>
          <Typography.Title level={2} color="primary">
            Подзаголовок
          </Typography.Title>
          <Typography.Title level={1}>Заголовок</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet consectetur. Interdum sit ut pulvinar
            vulputate quis pellentesque. Nec dignissim est viverra augue mi.
          </Typography.Paragraph>
          <Button size="large">Кнопка</Button>
        </div>
      </Section>
      <Section>
        <div>
          <Typography.Title level={2} color="primary" align="center">
            Подзаголовок
          </Typography.Title>
          <Typography.Title level={1} align="center">
            Заголовок
          </Typography.Title>
        </div>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Paper height="100%">
              <Typography.Title level={3}>Подзаголовок</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet consectetur. Interdum sit ut pulvinar
                vulputate quis pellentesque.
              </Typography.Paragraph>
            </Paper>
          </Col>
          <Col span={12}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Paper>
                  <Typography.Title level={3}>Подзаголовок</Typography.Title>
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Interdum sit ut
                    pulvinar vulputate quis pellentesque.
                  </Typography.Paragraph>
                </Paper>
              </Col>
              <Col span={24}>
                <Paper>
                  <Typography.Title level={3}>Подзаголовок</Typography.Title>
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Interdum sit ut
                    pulvinar vulputate quis pellentesque.
                  </Typography.Paragraph>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </div>
  );
}

export default HomePage;
