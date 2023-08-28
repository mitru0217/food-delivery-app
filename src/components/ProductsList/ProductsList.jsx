import { List, Row, Col } from 'antd';
import { useShopStore } from '../../zustand/store';
// import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
// const { Title } = Typography;

const ProductsList = ({ onClick }) => {
  const { products } = useShopStore();
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

// ProductsList.propTypes = {
//   onClick: PropTypes.func,
// };

export default ProductsList;
