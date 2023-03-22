import React from 'react';
import { ConfigProvider } from 'antd';

interface Props {
  children: React.ReactNode;
}

const AntdConfigProvider = ({ children }: Props) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Jost',
        fontSizeHeading1: 56,
        fontWeightStrong: 800,
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default AntdConfigProvider;
