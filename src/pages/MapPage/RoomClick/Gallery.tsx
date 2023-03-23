import Typography from '@/components/Typography';
import { Col, Row } from 'antd';
import { useSetAtom } from 'jotai';
import { bottomSheetOpenAtom } from '../atom';
import { EventImage, Header } from '../components/Card';
import Divider from '../components/Divider';

interface GalleryProps {
  gallery: string[];
}

const Gallery = ({ gallery }: GalleryProps) => {
  const setBottomSheetOpen = useSetAtom(bottomSheetOpenAtom);
  return (
    <div style={{ width: '100%' }}>
      <Header>
        <Typography.Title
          level={2}
          style={{ margin: 0, fontWeight: 600, textTransform: 'none' }}
        >
          Работы участников
        </Typography.Title>
        <img
          src="/cancel.svg"
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={() => setBottomSheetOpen(false)}
        />
      </Header>
      <Divider />
      <Row gutter={[5, 25]}>
        {gallery.map(image => (
          <Col span={12} key={image}>
            <EventImage src={image} />
          </Col>
        ))}
      </Row>
      {gallery.length === 0 ? (
        <Typography.Title level={3}>Тут пока пусто</Typography.Title>
      ) : null}
    </div>
  );
};

export default Gallery;
