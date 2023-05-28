import { Button, Space, Card, Typography, List, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// const { Title } = Typography;

const ProductsList = ({ products, onClick }) => {
  return (
    <>
      <List
        style={{ paddingTop: 90 }}
        dataSource={products}
        grid={{ gutter: [16, 24], column: 3 }}
        renderItem={item => (
          <Row gutter={[16, 24]}>
            <List.Item>
              <Col span={8} style={{ width: '100%' }}>
                <Card
                  hoverable
                  key={item.id}
                  title={item.name}
                  onClick={onClick}
                  style={{ width: '300px', height: '350px' }}
                >
                  <Space direction="vertical" align="end">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%' }}
                    />
                    <Typography>Price:{item.price}$</Typography>
                    <Button type="primary">
                      Add to cart
                      <PlusOutlined />
                    </Button>
                  </Space>
                </Card>
              </Col>
            </List.Item>
          </Row>
        )}
      />
    </>
  );
};

export default ProductsList;
