import { Layout, Button, Space, Card, Row, Col, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import BigMack from '../../assets/images/McDonalds/Big Mack.jpg';

const Content = () => {
  const contentStyle = {
    paddingInline: 50,
    minHeight: '100vh',
    backgroundColor: '#5b8c00',
  };
  return (
    <Layout.Content style={contentStyle}>
      <Card
        style={{ flex: '1', backgroundColor: '#7cb305' }}
        title="MacDonalds"
        hoverable
      >
        <Row gutter={[16, 24]} style={{ backgroundColor: '#7cb305' }}>
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Col key={i} span={8} style={{ width: '100%' }}>
                <Card title="Big Burger" hoverable>
                  <Space direction="vertical" align="end">
                    <img alt="product" src={BigMack} />
                    <Typography>Price: 2 $</Typography>
                    <Button type="primary">
                      Add to cart
                      <PlusOutlined />
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
        </Row>
      </Card>
    </Layout.Content>
  );
};
export default Content;
