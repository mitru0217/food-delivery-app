import { Layout } from 'antd';
import ProductsList from '../ProductsList/ProductsList';

const Content = ({ products }) => {
  const contentStyle = {
    paddingInline: 50,
    backgroundColor: '#5b8c00',
  };
  return (
    <Layout.Content style={contentStyle}>
      <ProductsList products={products} />
    </Layout.Content>
  );
};
export default Content;
