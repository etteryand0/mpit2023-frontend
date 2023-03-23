import Typography from '@/components/Typography';
import React from 'react';
import QRCode from 'react-qr-code';
import { Header } from '../components/Card';
import Divider from '../components/Divider';

type Props = {
  value: string;
  toggle: () => void;
};

const QR = ({ value, toggle }: Props) => {
  return (
    <div>
      <div style={{ width: '100%', paddingInline: 40 }}>
        <Header>
          <Typography.Title
            level={2}
            style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
          >
            QR - Код
          </Typography.Title>
          <img
            src="/cancel.svg"
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={toggle}
          />
        </Header>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <QRCode value={value} />
        </div>
      </div>
    </div>
  );
};

export default QR;
