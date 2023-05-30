import { List, Row, Col } from 'antd';

import ProductCard from '../ProductCard/ProductCard';
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
                <ProductCard item={item} onClick={onClick} />
              </Col>
            </List.Item>
          </Row>
        )}
      />
    </>
  );
};

export default ProductsList;
