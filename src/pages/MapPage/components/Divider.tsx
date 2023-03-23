import { Col, Row, Divider as AntDivider } from 'antd';

const Divider = () => {
  return (
    <Row justify="center">
      <Col span="22">
        <AntDivider style={{ paddingInline: 15 }} />
      </Col>
    </Row>
  );
};

export default Divider;
