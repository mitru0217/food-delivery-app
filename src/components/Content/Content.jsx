import { Layout } from 'antd';
import ProductsList from '../ProductsList/ProductsList';
import BgImage from '../../assets/images/BgImageContent.jpg';

const Content = () => {
  const contentStyle = {
    paddingInline: 50,
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowY: 'auto',
    height: 'calc(100vh - 100px)',
  };
  return (
    <Layout.Content style={contentStyle}>
      <ProductsList />
    </Layout.Content>
  );
};

export default Content;
