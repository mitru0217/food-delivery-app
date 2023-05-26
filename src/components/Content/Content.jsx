import { useState, useEffect } from 'react';
import { Layout, Button, Space, Card, Row, Col, Typography, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import getProducts from '../../services/ProductsApi';

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        error.message;
      }
    }

    fetchProducts();
  }, []);

  const contentStyle = {
    paddingInline: 50,
    backgroundColor: '#5b8c00',
  };
  return (
    <Layout.Content style={contentStyle}>
      <List
        dataSource={products}
        renderItem={item => (
          <List.Item>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Col key={i} span={8} style={{ width: '100%' }}>
                  <Card
                    key={item.id}
                    title={item.name}
                    style={{ width: '300px', height: '350px' }}
                  >
                    <Row
                      gutter={[16, 24]}
                      style={{ backgroundColor: '#7cb305' }}
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
                    </Row>
                  </Card>
                </Col>
              ))}
          </List.Item>
        )}
      />
    </Layout.Content>
  );
};
export default Content;
