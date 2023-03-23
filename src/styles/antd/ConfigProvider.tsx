import React from 'react';
import { ConfigProvider } from 'antd';
import { themes } from '../theme';

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
        colorPrimary: themes.light.primary,
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default AntdConfigProvider;
