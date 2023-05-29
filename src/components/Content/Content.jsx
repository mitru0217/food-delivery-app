import { Layout } from 'antd';
import ProductsList from '../ProductsList/ProductsList';
import BgImage from '../../assets/images/BgImageContent.jpg';

const Content = ({ products }) => {
  const contentStyle = {
    paddingInline: 50,
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <Layout.Content style={contentStyle}>
      <ProductsList products={products} />
    </Layout.Content>
  );
};
export default Content;
